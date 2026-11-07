# Politnesia — Berkas Investigasi

Long-form investigative report on Indonesian politics, 1945–today: three orde, eight presidents, and the patterns that repeat — hiperinflasi, KKN, kartelisasi, and a war on drugs that never ends. Statically generated with SvelteKit and prerendered for any static host (Vercel).

## Stack

- SvelteKit 3 (runes mode) + `@sveltejs/adapter-static`, prerendered (`src/routes/+layout.ts`)
- Bun as the package manager
- Chart.js via `svelte-chartjs` (charts SSR shell; drawn client-side on mount)
- Design: **light print dossier** — cream paper, ink, one oxblood accent. Hand-written token system in `src/lib/styles/` (`tokens.css` → `base.css` → `layout.css` → `plates.css` → `motion.css`). No Tailwind, no UI kit.
- Type: Newsreader (display serif, `opsz` variable) · Schibsted Grotesk (body/UI) · JetBrains Mono (kickers, data, tabular figures)

## Design system

The page reads as a numbered newspaper: a front page (masthead, giant Newsreader headline,
"Di edisi ini" index box, count-up key figures, eight-portrait roster) followed by ten chapters
(`No. 01` … `No. 10`). Shared furniture lives in `src/lib/components/`:

- `ChapterHead` — kicker number, hairline rail, section range (`§ 1945–1998`), serif headline
- `PullQuote` — double-rule editorial pull quote (Newsreader italic, oxblood highlight)
- `PersonCard` — engraved portrait "plates" (CSS duotone, double frame, `Plate I–VIII` numbering)
- `FocusPanel` — ledger bars (dotted leaders, `tnum` values, oxblood fills)
- `ChartCard` — numbered figures (`FIG. 1–12`) with mono caption, oxblood annotation, source line
- `Nav` — sticky broadsheet masthead (nameplate, mono section index, double rule; mobile contents overlay)
- `Footer` — colophon: nameplate, contents, `SOURCES_LINE` strip, portrait credits

Margin notes (`.margin-note`) occupy a 236px rail ≥1200px and collapse inline below that.
Charts use one shared ink-on-paper theme (`src/lib/chartRegister.ts`); series colors are
ochre (Orde Lama) · oxblood (Orde Baru) · slate ink (Reformasi). All motion rests under
`prefers-reduced-motion`; content is fully readable without JS (reveals are class-based;
charts draw on mount).

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

Vercel: the project is detected as SvelteKit. Deploys serve the prerendered static output as-is — no server functions are needed. If the auto-detected preset misbehaves, use "Other" with build command `bun run build` and output directory `build`. No base path needed (served from the root).

## Checks

```bash
bun run build && bunx svelte-kit sync && bun run check
```

Visual review: serve `build/` statically and check at 1440px, 1200px, 768px and 390px — the hero (index box, stamp, facts strip, roster), at least one chapter with charts and one with tables, plus the mobile contents overlay. `shots/` holds local screenshots (not committed).

## Data

All investigative datasets are structured TypeScript modules in `src/lib/data/` (presidents, elections, tax, narkotika, pembunuhan, trends, copy). Components render from data; nothing is hard-coded in markup. Chart series are exported alongside.
