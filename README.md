<div align="center">

# Politnesia — Berkas Investigasi

**A long-form investigative report on Indonesian politics, 1945 to today.**

Three *orde*, eight presidents, and the patterns that keep repeating —
hiperinflasi, KKN, kartelisasi, and a war on drugs that never ends.

![SvelteKit](https://img.shields.io/badge/SvelteKit-runes-FF3E00?logo=svelte&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-package%20manager-000000?logo=bun&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-svelte--chartjs-FF6384?logo=chartdotjs&logoColor=white)
![Static](https://img.shields.io/badge/output-static%20site-8B1E2D)
![Vercel](https://img.shields.io/badge/deploy-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Quality Checks](#quality-checks)
- [Design System](#design-system)
- [Data](#data)
- [Project Structure](#project-structure)

## Overview

Politnesia is a statically generated, prerendered web dossier. It is laid out like a numbered
newspaper: a front page followed by ten chapters (`No. 01` … `No. 10`).

**Front page**

- Masthead and a giant Newsreader headline
- "Di edisi ini" index box
- Count-up key figures
- Eight-portrait roster of presidents

**Chapters**

- Charts (`FIG. 1–12`), tables, pull quotes, and margin notes
- Content is fully readable without JavaScript — reveals are class-based, and charts draw on mount

## Tech Stack

| Area | Choice |
| --- | --- |
| Framework | SvelteKit 3 (runes mode) |
| Adapter | `@sveltejs/adapter-static`, prerendered via `src/routes/+layout.ts` |
| Package manager | [Bun](https://bun.sh) |
| Charts | Chart.js via `svelte-chartjs` (SSR shell, drawn client-side on mount) |
| Styling | Hand-written token system — no Tailwind, no UI kit |
| Typography | Newsreader (display serif, variable `opsz`) · Schibsted Grotesk (body/UI) · JetBrains Mono (kickers, data, tabular figures) |

## Getting Started

**Prerequisite:** [Bun](https://bun.sh) installed.

```bash
bun install
bun run dev
```

The dev server prints a local URL once it is running.

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run build` | Build the static site into `build/` |
| `bun run preview` | Serve the production build locally |
| `bun run check` | Type and Svelte checks |

## Deployment

The output is a plain prerendered static site, so it works on any static host. No server
functions and no base path are needed (served from the root).

### Vercel

Vercel detects the project as SvelteKit and serves the prerendered output as-is. If the
auto-detected preset misbehaves, choose **Other** and set:

| Setting | Value |
| --- | --- |
| Build command | `bun run build` |
| Output directory | `build` |

## Quality Checks

```bash
bun run build && bunx svelte-kit sync && bun run check
```

**Visual review:** serve `build/` statically and check at **1440px**, **1200px**, **768px**, and
**390px**. Cover:

- The hero (index box, stamp, facts strip, roster)
- At least one chapter with charts and one with tables
- The mobile contents overlay

> `shots/` holds local screenshots and is not committed.

## Design System

A **light print dossier**: cream paper, ink, and a single oxblood accent. Tokens are layered in
`src/lib/styles/`:

```
tokens.css → base.css → layout.css → plates.css → motion.css
```

### Shared components (`src/lib/components/`)

| Component | Purpose |
| --- | --- |
| `ChapterHead` | Kicker number, hairline rail, section range (`§ 1945–1998`), serif headline |
| `PullQuote` | Double-rule editorial pull quote (Newsreader italic, oxblood highlight) |
| `PersonCard` | Engraved portrait "plates" — CSS duotone, double frame, `Plate I–VIII` numbering |
| `FocusPanel` | Ledger bars with dotted leaders, `tnum` values, oxblood fills |
| `ChartCard` | Numbered figures (`FIG. 1–12`) with mono caption, oxblood annotation, and source line |
| `Nav` | Sticky broadsheet masthead — nameplate, mono section index, double rule, mobile contents overlay |
| `Footer` | Colophon: nameplate, contents, `SOURCES_LINE` strip, portrait credits |

### Layout and behavior

- **Margin notes** (`.margin-note`) sit in a 236px rail at ≥1200px and collapse inline below that.
- **Charts** share one ink-on-paper theme (`src/lib/chartRegister.ts`). Series colors: ochre (Orde Lama) · oxblood (Orde Baru) · slate ink (Reformasi).
- **Accessibility:** all motion rests under `prefers-reduced-motion`.

## Data

All investigative datasets are structured TypeScript modules in `src/lib/data/`:

`presidents` · `elections` · `tax` · `narkotika` · `pembunuhan` · `trends` · `copy`

Components render from this data; nothing is hard-coded in markup. Chart series are exported
alongside the datasets.

## Project Structure

```
politnesia/
├── src/
│   ├── routes/
│   │   └── +layout.ts        # prerender configuration
│   └── lib/
│       ├── components/       # ChapterHead, PullQuote, PersonCard, FocusPanel, ChartCard, Nav, Footer
│       ├── data/             # typed investigative datasets and chart series
│       ├── styles/           # tokens → base → layout → plates → motion
│       └── chartRegister.ts  # shared Chart.js theme
├── build/                    # static output (generated)
└── shots/                    # local review screenshots (not committed)
```
