Status: **LOCKED** (2026-03-26)

# CONTRACT — Narduk Charts public site vs library

This document is **enforceable**. Changes to `narduk-charts` public exports or
chart families **must** update this contract, the showcase, and API docs in the
same change train.

## Library inventory (authoritative)

### Chart components (each MUST have showcase + API slug)

| Family                 | Showcase route          | API slug                 |
| ---------------------- | ----------------------- | ------------------------ |
| `NardukCandleChart`    | `/showcase/candle`      | `narduk-candle-chart`    |
| `NardukLineChart`      | `/showcase/line`        | `narduk-line-chart`      |
| `NardukBarChart`       | `/showcase/bar`         | `narduk-bar-chart`       |
| `NardukPieChart`       | `/showcase/pie`         | `narduk-pie-chart`       |
| `NardukScatterChart`   | `/showcase/scatter`     | `narduk-scatter-chart`   |
| `NardukHistogramChart` | `/showcase/histogram`   | `narduk-histogram-chart` |
| `NardukChartStack`     | `/showcase/chart-stack` | `narduk-chart-stack`     |

### Capability showcases (MUST exist if feature remains public)

| Capability          | Route                                      |
| ------------------- | ------------------------------------------ |
| Interactions & zoom | `/showcase/capabilities/interactions`      |
| Synchronized panes  | `/showcase/capabilities/synchronized`      |
| Realtime buffers    | `/showcase/capabilities/realtime`          |
| Studies             | `/showcase/capabilities/studies`           |
| Theming             | `/showcase/capabilities/theming`           |
| Export & fullscreen | `/showcase/capabilities/export-fullscreen` |
| Index               | `/showcase/capabilities`                   |

### Docs sections (minimum)

Routes under `/docs/**` as listed in `apps/web/app/data/site.ts` **must** stay
in sync with navigation, including: installation, quickstart, concepts, data,
composition, theming, events, performance, realtime, layout, trading-ui,
accessibility, faq, migration, API index + entries.

### API reference coverage

Every row in `apps/web/app/data/api-docs.ts` **must** resolve at
`/docs/api/:slug`.

### Metadata / SEO

- Each route in this contract implements
  `useSeo({ title, description, ogImage })` + `useWebPageSchema`.
- Site name/description defaults live in `apps/web/nuxt.config.ts` `site` block.

### Branding / assets

- Favicons and manifest: layer defaults unless overridden in `apps/web/public/`.
- Primary identity: `SiteHeader` / `SiteFooter` wordmark + activity icon
  (Lucide).

### Analytics expectations

- Funnel events implemented via `useSiteAnalytics` (see `SPEC.md`). Adding a new
  primary CTA **must** emit a named `site_cta_click` or extend the composable
  with a tracked event.

## Acceptance: “every chart is showcased”

**Definition of done:** For every exported `Narduk*Chart` component in
`narduk-charts/src/index.ts`, there exists:

1. A live interactive example on its showcase route.
2. An `api-docs.ts` entry + `/docs/api/[slug]` page.
3. A card on `/showcase` linking to both.

## Anti-drift rules

1. **Adding a chart component** to `narduk-charts` exports → add rows to this
   table, `chartFamilies` in `site.ts`, `api-docs.ts`, and create showcase + API
   pages before merge.
2. **Adding a composable / utility** to public exports → add API doc entry + (if
   user-visible) a capability or docs section explaining usage.
3. **Removing or renaming** props/events → update `api-docs.ts` and affected
   showcase snippets in the same PR.
4. **Dependency wiring:** `apps/web` depends on
   **`@narduk-enterprises/narduk-charts`** from **GitHub Packages** (semver
   range in `apps/web/package.json`, resolved version in `pnpm-lock.yaml`).
   Bumping the library **must** include a publish from
   `narduk-enterprises/narduk-charts` (tag `v*` or `workflow_dispatch` on
   **Publish package**) and a lockfile update in this repo.

## Non-public surfaces

The following are **intentionally internal** unless promoted to `src/index.ts`:

- `useChart`, `useTooltip`
- `ChartTooltip`, `ChartLegend` (supporting components)

Documenting them on the public site requires an explicit export + API entry
first.

## Repository split

- **Library:** `narduk-enterprises/narduk-charts`
- **Site:** `narduk-enterprises/charts` (this repo)

Site changes **never** replace versioned API docs for unpublished library
versions without a coordinated release note.
