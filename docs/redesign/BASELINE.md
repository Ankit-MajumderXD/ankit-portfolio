# Redesign baseline

Recorded 2026-11-09 on branch `redesign`, created from `main` at `9fbd713`.
The live site (https://ankit-portfolio-rose-iota.vercel.app) serves the same
bundle hash as a local build of this commit (`index-jLk_AQHj.js`).

## Checks

| Check | Result |
|---|---|
| `npm run lint` | clean |
| `tsc -p tsconfig.app.json --noEmit` | clean |
| `vite build` | succeeds |

## Bundle

| Asset | Size |
|---|---|
| JS (single chunk) | 454.42 kB (131.63 kB gzip) |
| CSS | 42.48 kB (6.91 kB gzip) |
| `mirofish.png` (1200×1350) | 2,413 kB |
| `astrotrack.png` (900×1600) | 1,949 kB |
| `chõra.png` (816×1456) | 1,379 kB |
| `fidus.png` (700×933) | 503 kB |
| `fidus-hero.png` (1600×800) | 190 kB |
| `profile.png` (1023×1537) | 70 kB |

## Routes

- `/` Home: Hero, Projects, About, Journey, Skills, Contact, Footer
- `/projects/chora`
- `/projects/astro-rescue-ai`
- `/projects/miro-fish`
- `/projects/fidus`

Unknown routes and `/robots.txt` return `index.html` with status 200.

## Visual baseline

- Pure black (`#000`) background, white text, system font stack (Inter is
  installed but not loaded).
- Per-project accents: Chõra violet, Astro Rescue blue, Miro Fish emerald,
  Fidus cyan.
- No light theme, no mobile navigation menu, no reduced-motion handling.

No screenshots were captured; no browser automation is set up in this repo.
