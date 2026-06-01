@AGENTS.md

# GenieStation v2 — Project Overview

Modernization of [geniestation.com](https://www.geniestation.com) — a German e-commerce site selling the **GS60 Elektro Umbaukit**, a plug-and-play electric conversion kit for classic Simson mopeds (S51, S50, Schwalbe, SR50). The rebuild targets a clean, modern design with a focus on conversion clarity and trust.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16.2.6 (App Router) |
| UI Library | React 19.2.4 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Animation | framer-motion ^12.40 |
| Fonts | Crimson Pro (display/headings), DM Sans (body/sans-serif) — loaded via Google Fonts |
| Package Manager | npm |
| Linting | ESLint 9 + eslint-config-next |

**⚠️ This is Next.js 16 — APIs, conventions, and file structure differ from earlier versions.** Before writing any Next.js code, consult `node_modules/next/dist/docs/`. Read the relevant guide; heed deprecation notices.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout — metadata, fonts, HTML shell
│   ├── page.tsx            # Homepage (Hero → Specs → ... → Footer)
│   ├── globals.css         # Design tokens, @theme, shared utility classes
│   ├── produkte/           # /produkte — product pricing & configurator
│   ├── elektro-mopeds/     # /elektro-mopeds
│   ├── informationen/      # /informationen
│   ├── videos/             # /videos
│   ├── kontakt/            # /kontakt — contact page
│   ├── impressum/          # /impressum — legal notice
│   ├── datenschutz/        # /datenschutz — privacy policy
│   └── agb/                # /agb — terms & conditions
├── components/             # React components (all client components unless server-only)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Specs.tsx
│   ├── Compatibility.tsx
│   ├── ProductShowcase.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Advantages.tsx
│   ├── Community.tsx
│   ├── PartnerCTA.tsx
│   ├── Footer.tsx
│   ├── ScrollReveal.tsx    # Shared scroll-triggered reveal animation
│   └── Logo.tsx
├── lib/
│   ├── images.ts           # Centralized image paths (IMAGES const)
│   └── icons.tsx           # 24×24 custom SVG icons (stroke-width 1.5)
├── public/
│   └── images/             # Static product/feature/community images
└── scripts/
    ├── download-images.mjs      # Image scraping via Chrome DevTools Protocol
    └── download-images-hires.mjs
```

## Design System

### Colors (CSS custom properties)
- `--color-bg`: `#fffbf7` — warm cream page background
- `--color-surface`: `#ffffff` — card/surface white
- `--color-accent`: `#e84c3d` — brand red (CTAs, badges, highlights)
- `--color-accent-hover`: `#c0392b` — darker red hover state
- `--color-accent-subtle`: `#fdf0ed` — very light red (badge backgrounds)
- `--color-text`: `#1a1a1a` — primary text
- `--color-text-secondary`: `#5c5c5c` — body/secondary text
- `--color-text-muted`: `#969696` — muted/label text
- `--color-border`: `#e8e4df` — card/input borders
- `--color-border-light`: `#f2efeb` — subtle dividers
- `--color-success`: `#3d8361` — positive/success green
- `--color-success-subtle`: `#edf5f0` — success background

### Typography
- **Display/Headings**: `'Crimson Pro', ui-serif, Georgia, serif` — used via `var(--font-display)` or `font-[family-name:var(--font-display)]`
- **Body/UI**: `'DM Sans', ui-sans-serif, system-ui, sans-serif` — used via `var(--font-sans)` or inherited from `body`
- Site language: **German** (`<html lang="de">`)

### Shadows
- `--shadow-sm`: subtle card default (`0 1px 2px rgba(0,0,0,0.04)`)
- `--shadow-md`: card hover (`0 4px 16px ...`)
- `--shadow-lg`: elevated surfaces (`0 12px 40px ...`)
- `--shadow-xl`: highest emphasis (`0 24px 56px ...`)

### Border Radii
- `--radius-sm`: 8px
- `--radius-md`: 14px
- `--radius-lg`: 20px
- `--radius-xl`: 28px
- `--radius-full`: 9999px (pills, buttons, badges)

### Shared CSS Utility Classes (defined in `globals.css`)
- `.section-py` — responsive vertical section padding (5rem → 7rem at md+)
- `.badge` — pill-shaped label (accent-subtle bg, accent text)
- `.card` — white card with border, shadow-sm, hover lift effect
- `.btn-primary` — filled red pill button with shadow
- `.btn-secondary` — outlined pill button (white bg, border)
- `.btn-ghost` — transparent button with hover bg
- `.section-label` — small uppercase red label above headings
- `.section-heading` — large Crimson Pro heading with `clamp()` sizing
- `.section-subheading` — secondary paragraph text, max-width constrained

## Code Conventions

### Path Alias
```ts
import Foo from "@/components/Foo";   // maps to ./src/*
```

### Component Patterns
1. **Client components** always start with `"use client"` directive.
2. **Hydration guard** — components using `useState`/`useEffect`/browser APIs use the `[mounted, setMounted]` pattern to render static content first (avoids SSR hydration mismatch), then animate after mount.
3. **ScrollReveal** is the shared pattern for scroll-triggered animations — uses `IntersectionObserver` + `framer-motion`, with responsive `rootMargin` (more generous on mobile).
4. **Responsive approach**: mobile-first with `sm:`, `md:`, `lg:` Tailwind breakpoints.
5. **Section structure**: each page section is its own component in `src/components/`, composed in `page.tsx`.

### Icons
- All icons live in `src/lib/icons.tsx` as named exports.
- SVG format: 24×24 viewBox, `strokeWidth={1.5}`, `strokeLinecap="round"`, `strokeLinejoin="round"`.
- Accept `className` prop (default `"w-6 h-6"`).
- **No emojis** in UI — always use the icon components.

### Images
- Image paths centralized in `src/lib/images.ts` as the `IMAGES` const.
- Use `next/image` for all image rendering.
- Image domains `lh3.googleusercontent.com` and `ssl.gstatic.com` are allowed in `next.config.ts` for remote images (Google-hosted content from original site).

### Styling
- Prefer Tailwind utility classes. Use CSS custom properties (defined in `:root` in `globals.css`) for design tokens.
- New shared patterns should be added to `globals.css` as utility classes.
- Use `@theme inline` block in Tailwind to bridge CSS custom properties to Tailwind tokens.

### Scripts
- Located in `scripts/`, written as ES modules (`.mjs`).
- Run with `node script-name.mjs`.

## Common Commands
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Key Context
- **Target audience**: German-speaking Simson enthusiasts, DIY mechanics, eco-conscious riders.
- **Product**: GS60 conversion kit — replaces the combustion engine with a 4kW electric drive. Key selling points: plug & play, reversible (no permanent modifications), includes TÜV expert opinion (Mustergutachten), 100km range, 60km/h top speed.
- **Tone**: professional, trustworthy, engineering-forward, enthusiastic but not hype-y. Clean German copy.
- **Original site**: images were scraped from geniestation.com via Chrome DevTools Protocol (see `scripts/download-images.mjs`).
