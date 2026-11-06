# Politnesia — Berkas Investigasi

Long-form investigative report on Indonesian politics, 1945–today: three orde, eight presidents, and the patterns that repeat — hiperinflasi, KKN, kartelisasi, and a war on drugs that never ends. Statically generated with SvelteKit and prerendered for any static host (Vercel).

## Stack

- SvelteKit 3 (runes mode) + `@sveltejs/adapter-static`, prerendered (`src/routes/+layout.ts`)
- Bun as the package manager
- Chart.js via `svelte-chartjs` (charts SSR shell; drawn client-side on mount)
- design-taste-frontend system CSS copied to `src/lib/styles/` (never edited there); page-specific CSS in `dossier.css`
- No Tailwind; hand-written token system matching the kit

## Develop

```bash
bun install
bun run dev
```

## Build & deploy

```bash
bun run build     # outputs static site to build/
bun run preview   # serve the production build locally
```

Vercel: framework preset "Other" (or static), output directory `build`. No base path needed (served from the root).

## Checks

```bash
bun run build && bunx svelte-kit sync && bun run check
```

The design checks (layout/consistency/perf) are run with the design-taste-frontend skill's scripts against the served `build/` output. See `shots/` for the screenshots (not committed).

## Data

All investigative datasets are structured TypeScript modules in `src/lib/data/` (presidents, elections, tax, narkotika, pembunuhan, trends, copy). Components render from data; nothing is hard-coded in markup. Chart series are exported alongside.
