Status: **LOCKED** (2026-03-26)

# Narduk Charts — Public site, docs & showcase specification

## Purpose

`narduk-enterprises/charts` (this repo, app `apps/web`) is the **canonical
public product, documentation, and showcase surface** for the Vue charting
library **`narduk-enterprises/narduk-charts`**.

The site must let buyers and engineers answer, without guesswork:

- Which chart families ship and how they look in realistic trading contexts.
- Which interactions (zoom, sync, streaming, export) are real, public APIs.
- How to install, theme, and wire events with typed contracts.
- Why the stack is credible for enterprise trading and fintech desks.

## Audience segments

| Segment               | Needs                                                                  |
| --------------------- | ---------------------------------------------------------------------- |
| Evaluators / buyers   | Credibility, scope clarity, performance posture, integration risk.     |
| Frontend engineers    | Install paths, API tables, copy-paste examples, data shapes.           |
| Design system owners  | Theming tokens, contrast modes, embeddability in branded shells.       |
| Trading product teams | Multi-pane sync, studies pipeline, drawing persistence, audit exports. |

## Chart showcase strategy

- **Inventory source of truth:** Public exports in `narduk-charts`
  `src/index.ts` (see `CONTRACT.md`).
- **One showcase route per chart family** with live demo, controls (where
  meaningful), code sample, when-to-use, interactions, API links.
- **Capability tours** for cross-cutting behaviors (interactions, sync,
  realtime, studies, theming, export/fullscreen).
- **Fixtures:** Central deterministic helpers under `apps/web/app/lib/demo/`;
  prefer synthetic OHLCV and portfolio-like series over toy random data.

## API docs strategy

- **Hybrid:** Curated `apps/web/app/data/api-docs.ts`
  (props/events/models/examples) + dynamic route `docs/api/[slug].vue`.
- **Scope:** Only symbols actually exported from `narduk-charts` root or
  documented subpaths (`/studies`).
- **Non-goals:** Undocumented internals (`useChart`, `ChartTooltip`, etc.) stay
  out of the reference unless promoted to public exports.

## Page inventory (minimum)

- **Product:** `/`, `/product/features`, `/product/enterprise`,
  `/product/performance`, `/product/theming`, `/product/integration`
- **Showcase:** `/showcase`, `/showcase/candle`, `/showcase/line`,
  `/showcase/bar`, `/showcase/pie`, `/showcase/scatter`, `/showcase/histogram`,
  `/showcase/chart-stack`, `/showcase/capabilities` (+ capability children)
- **Docs:** `/docs` tree including installation, quickstart, concepts, data,
  composition, theming, events, performance, realtime, layout, trading-ui,
  accessibility, faq, migration, `/docs/api`, `/docs/api/*`
- **Outbound:** GitHub links for library + site source
  (`apps/web/app/data/site.ts` constants)

## Enterprise positioning

- Emphasize **SVG precision**, **explicit interaction contracts**, **sync
  models**, **streaming buffers**, **export surfaces**, and **bounded library
  scope** (no DOM ladder / alerts in core).
- Visual tone: dark-friendly, technical, restrained accent, data-dense — not a
  rainbow gallery.

## SEO strategy

- Unique `useSeo` title + description per major route; intent clusters: trading
  chart library, financial charting, Vue OHLC, embeddable charts, fintech
  dashboards.
- Internal links: homepage → showcase, docs, API; every chart card → API slug;
  capability pages → relevant docs.
- Schema: `useWebPageSchema` on pages; site identity via layer `schemaOrg` +
  `site` config.

## Analytics / funnel strategy

- Use layer `usePosthog` via `useSiteAnalytics` composable.
- Events: `site_cta_click`, `site_nav_click`, `showcase_page_view`,
  `docs_page_view`, `api_doc_view`, `docs_code_copy`, `github_outbound_click`.
- No noisy auto-page spam beyond meaningful evaluation steps.

## Trust & quality bar

- Examples must compile against the `@narduk-enterprises/narduk-charts` version
  pinned in `pnpm-lock.yaml`.
- No placeholder “coming soon” in production routes covered by `CONTRACT.md`.
- CI must run `pnpm --filter web run lint` and `typecheck` green.

## Related artifacts

- `UI_PLAN.md` — layout, navigation, and visual structure.
- `CONTRACT.md` — routable enforcement and anti-drift rules.
