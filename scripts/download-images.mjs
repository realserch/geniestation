// Downloads images from geniestation.com via Chrome DevTools Protocol
// Takes per-element screenshots since images are already rendered in the browser

import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "public", "images");
mkdirSync(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function findDebugPort() {
  for (const port of [9222, 9229, 9333, 53817]) {
    try {
      const res = await fetch(`http://localhost:${port}/json/version`);
      if (res.ok) return port;
    } catch {}
  }
  throw new Error("Chrome debugging nicht gefunden");
}

async function getPageTarget(debugPort) {
  const res = await fetch(`http://localhost:${debugPort}/json`);
  const targets = await res.json();
  let page = targets.find((t) => t.type === "page" && t.url !== "chrome://intro/");
  if (page) return page;
  const r = await fetch(`http://localhost:${debugPort}/json/new?url=about:blank`);
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
            const timeout = setTimeout(() => {
              pending.delete(id);
              rej(new Error(`Timeout: ${method}`));
            }, 60000);
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
        clearTimeout(timeout);
        pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    };
    ws.onerror = (err) => reject(err);
  });
}

async function main() {
  const debugPort = await findDebugPort();
  let target = await getPageTarget(debugPort);

  // If target is on geniestation.com already, use it; otherwise navigate
  if (!target.url.includes("geniestation.com")) {
    const r = await fetch(`http://localhost:${debugPort}/json/new?url=https://www.geniestation.com/`);
    target = await r.json();
  }

  console.log(`Verbinde mit: ${target.url}`);
  const cdp = await createCDP(target.webSocketDebuggerUrl);

  await cdp.send("Page.enable");
  await cdp.send("DOM.enable");
  await cdp.send("Runtime.enable");

  // Navigate if needed
  if (!target.url.includes("geniestation.com")) {
    await cdp.send("Page.navigate", { url: "https://www.geniestation.com/" });
  }
  await sleep(5000);
  console.log("Seite geladen.");

  // Get all image elements with their bounding boxes
  const { result } = await cdp.send("Runtime.evaluate", {
    expression: `
      Array.from(document.querySelectorAll('img'))
        .filter(img => img.src && img.src.includes('googleusercontent.com') && img.naturalWidth > 0)
        .map((img, i) => {
          const rect = img.getBoundingClientRect();
          return {
            index: i,
            src: img.src,
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            x: Math.round(rect.x),
            y: Math.round(rect.y),
          };
        })
    `,
    returnByValue: true,
  });

  const images = result.value || [];
  console.log(`${images.length} sichtbare Google-Bilder gefunden.\n`);

  // Deduplicate by URL
  const seen = new Set();
  const unique = images.filter((img) => {
    if (seen.has(img.src)) return false;
    seen.add(img.src);
    return true;
  });

  for (let i = 0; i < unique.length; i++) {
    const img = unique[i];
    if (img.width < 20 || img.height < 20) continue; // skip tiny icons

    console.log(`[${i + 1}/${unique.length}] Screenshot: ${img.width}x${img.height}px`);

    try {
      // Capture screenshot clipped to element bounds
      const screenshot = await cdp.send("Page.captureScreenshot", {
        format: "png",
        clip: {
          x: img.x,
          y: img.y,
          width: img.width,
          height: img.height,
          scale: 2, // retina quality
        },
        captureBeyondViewport: true,
      });

      const name = `img_${String(i + 1).padStart(2, "0")}.png`;
      writeFileSync(resolve(OUT, name), Buffer.from(screenshot.data, "base64"));
      console.log(`  ✓ ${name} (${img.width}x${img.height})`);
    } catch (err) {
      console.log(`  ✗ ${err.message}`);
    }
  }

  console.log(`\nFertig! Bilder in public/images/`);
  cdp.close();
}

main().catch((err) => {
  console.error("FEHLER:", err.message);
  process.exit(1);
});
