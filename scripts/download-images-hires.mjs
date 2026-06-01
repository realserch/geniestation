// Captures images at full resolution by temporarily removing CSS constraints
// Images are loaded in the page at their native resolution but displayed smaller
// We unconstrain them, capture, then restore

import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "public", "images");
mkdirSync(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Store old images so we don't overwrite good ones
const BACKUP = resolve(OUT, "_old");
try { mkdirSync(BACKUP, { recursive: true }); } catch {}

async function findDebugPort() {
  for (const port of [9222, 9229, 9333, 53817]) {
    try {
      const res = await fetch(`http://localhost:${port}/json/version`);
      if (res.ok) return port;
    } catch {}
  }
  throw new Error("Chrome debugging nicht gefunden");
}

async function createTab(debugPort, url) {
  const r = await fetch(`http://localhost:${debugPort}/json/new?url=${encodeURIComponent(url)}`);
  return r.json();
}

function createCDP(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let msgId = 1;
    const pending = new Map();
    ws.onopen = () => {
      resolve({
        async send(method, params = {}) {
          const id = msgId++;
          return new Promise((res, rej) => {
            const timeout = setTimeout(() => { pending.delete(id); rej(new Error(`Timeout: ${method}`)); }, 60000);
            pending.set(id, { resolve: res, reject: rej, timeout });
            ws.send(JSON.stringify({ id, method, params }));
          });
        },
        close() { ws.close(); },
      });
    };
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject, timeout } = pending.get(msg.id);
        clearTimeout(timeout); pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    };
    ws.onerror = (err) => reject(err);
  });
}

async function main() {
  const debugPort = await findDebugPort();
  console.log(`Chrome auf Port ${debugPort}`);

  // Open geniestation.com
  const tab = await createTab(debugPort, "https://www.geniestation.com/");
  const cdp = await createCDP(tab.webSocketDebuggerUrl);
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Emulation.enable");

  await sleep(8000);
  console.log("Seite geladen. Scrolle zum Laden aller Bilder...");

  // Scroll through page to trigger all lazy loads
  await cdp.send("Runtime.evaluate", { expression: "window.scrollTo(0, document.body.scrollHeight)" });
  await sleep(2000);
  await cdp.send("Runtime.evaluate", { expression: "window.scrollTo(0, 0)" });
  await sleep(2000);

  // Set a very wide viewport so images can expand
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: 2560, height: 1440, deviceScaleFactor: 1, mobile: false,
  });
  await sleep(1000);

  // Get all image info
  const { result } = await cdp.send("Runtime.evaluate", {
    expression: `
      Array.from(document.querySelectorAll('img'))
        .filter(img => img.src && img.src.includes('googleusercontent.com') && img.naturalWidth > 0)
        .map((img, i) => ({
          index: i,
          src: img.src.replace(/=w\\d+$/, '=w1600'),
          naturalW: img.naturalWidth,
          naturalH: img.naturalHeight,
          alt: (img.alt || '').substring(0, 40),
        }))
    `,
    returnByValue: true,
  });

  const images = result.value || [];
  console.log(`${images.length} Bilder gefunden.\n`);

  // Dedup by src
  const seen = new Set();
  const unique = images.filter(img => { if (seen.has(img.src)) return false; seen.add(img.src); return true; });
  console.log(`${unique.length} einzigartige Bilder.\n`);

  for (let i = 0; i < unique.length; i++) {
    const img = unique[i];
    const name = `hq_${String(i + 1).padStart(2, "0")}`;
    console.log(`[${i + 1}/${unique.length}] Natural ${img.naturalW}x${img.naturalH} "${img.alt}"`);

    try {
      // Unconstrain THIS image to its natural size and hide everything else
      const { result: prepResult } = await cdp.send("Runtime.evaluate", {
        expression: `
          (() => {
            const imgs = document.querySelectorAll('img');
            const target = imgs[${img.index}];
            if (!target) return 'NOT_FOUND';

            // Store original styles for all images
            window.__imgBackup = window.__imgBackup || [];

            // Hide all other images, unconstrain this one
            imgs.forEach((el, idx) => {
              if (idx === ${img.index}) {
                window.__imgBackup.push({ el, cssText: el.style.cssText, parentDisplay: el.parentElement?.style.display });
                el.style.cssText = 'width: auto !important; max-width: none !important; height: auto !important; display: block !important; position: static !important; visibility: visible !important;';
                // Make parent containers wide enough
                let p = el.parentElement;
                while (p && p !== document.body) {
                  p.style.overflow = 'visible';
                  p.style.maxWidth = 'none';
                  p.style.width = 'auto';
                  p = p.parentElement;
                }
              } else {
                el.style.display = 'none';
              }
            });

            // Scroll to the image
            target.scrollIntoView({ block: 'start' });

            const rect = target.getBoundingClientRect();
            return { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) };
          })()
        `,
        returnByValue: true,
      });

      const box = prepResult.value;
      if (box === 'NOT_FOUND' || !box || box.w < 30) {
        console.log(`  ✗ Konnte Bild nicht finden oder zu klein`);
        // Restore
        await cdp.send("Runtime.evaluate", {
          expression: `
            if (window.__imgBackup) {
              window.__imgBackup.forEach(b => {
                b.el.style.cssText = b.cssText;
                if (b.parentDisplay !== undefined) b.el.parentElement.style.display = b.parentDisplay;
              });
              window.__imgBackup = [];
            }
            document.querySelectorAll('img').forEach(el => el.style.display = '');
          `
        });
        continue;
      }

      await sleep(500);

      console.log(`  Erfasst: ${box.w}x${box.h} @ (${box.x},${box.y})`);

      // Capture
      const screenshot = await cdp.send("Page.captureScreenshot", {
        format: "png",
        clip: { x: box.x, y: box.y, width: box.w, height: box.h, scale: 1 },
        captureBeyondViewport: true,
      });

      const filePath = resolve(OUT, `${name}.png`);
      writeFileSync(filePath, Buffer.from(screenshot.data, "base64"));
      console.log(`  ✓ ${name}.png (${box.w}x${box.h}, ${Math.round(screenshot.data.length/1024)}KB)`);

      // Restore
      await cdp.send("Runtime.evaluate", {
        expression: `
          document.querySelectorAll('img').forEach(el => el.style.display = '');
          if (window.__imgBackup) {
            window.__imgBackup.forEach(b => { b.el.style.cssText = b.cssText; });
            window.__imgBackup = [];
          }
        `
      });
    } catch (err) {
      console.log(`  ✗ ${err.message}`);
    }
  }

  console.log(`\nFertig! Bilder in public/images/hq_*.png`);
  console.log(`Natural sizes der Originale wurden erfasst.`);
  cdp.close();
}

main().catch(err => { console.error("FEHLER:", err.message); process.exit(1); });
