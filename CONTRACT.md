Status: **LOCKED** (2026-04-05)

# CONTRACT — Narduk Charts public site

This document is **enforceable**. Changes to `narduk-charts` public exports,
chart families, or required public routes **must** update this contract and the
affected public pages in the same change train.

## Required route inventory

### Product routes

- `/`
- `/product/features`
- `/product/performance`
- `/product/theming`
- `/product/integration`
- `/product/enterprise`

### Showcase routes

| Family                 | Showcase route          | API slug                 |
| ---------------------- | ----------------------- | ------------------------ |
| `NardukCandleChart`    | `/showcase/candle`      | `narduk-candle-chart`    |
| `NardukLineChart`      | `/showcase/line`        | `narduk-line-chart`      |
| `NardukBarChart`       | `/showcase/bar`         | `narduk-bar-chart`       |
| `NardukPieChart`       | `/showcase/pie`         | `narduk-pie-chart`       |
| `NardukScatterChart`   | `/showcase/scatter`     | `narduk-scatter-chart`   |
| `NardukHistogramChart` | `/showcase/histogram`   | `narduk-histogram-chart` |
| `NardukChartStack`     | `/showcase/chart-stack` | `narduk-chart-stack`     |

Capability routes that must exist while the capability remains public:

- `/showcase/capabilities`
- `/showcase/capabilities/interactions`
- `/showcase/capabilities/synchronized`
- `/showcase/capabilities/realtime`
- `/showcase/capabilities/studies`
- `/showcase/capabilities/theming`
- `/showcase/capabilities/export-fullscreen`

### Docs routes

Routes under `/docs/**` as listed in `apps/web/app/data/site.ts` **must** stay
in sync with navigation, including installation, quickstart, examples, concepts,
data, composition, theming, events, performance, realtime, layout, trading-ui,
accessibility, faq, migration, API index, and API entries.

Every row in `apps/web/app/data/api-docs.ts` **must** resolve at
`/docs/api/:slug`.

### Support routes

- `/use-cases`
- `/use-cases/brokerage`
- `/use-cases/terminals`
- `/pricing`
- `/contact`
- `/about`
- `/changelog`
- `/security`
- `/privacy`
- `/terms`

## Metadata and schema requirements

- Every route in this contract implements
  `useSeo({ title, description, ogImage })` and `useWebPageSchema(...)`.
- Nested support and showcase routes with two or more levels must also register
  breadcrumb schema.
- Site-level defaults live in `apps/web/nuxt.config.ts`.

## Layout rules

- Product, showcase, homepage, and support routes use the `marketing` layout.
- `/docs/**` and `/docs/api/**` use the `docs` layout.
- Auth and account routes remain outside the marketing/support surface.

## Branding and asset rules

- App-level favicon assets in `apps/web/public/` override layer defaults.
- `favicon.svg` is the source of truth for the generated PNG/ICO assets.
- `site.webmanifest` `name` and `short_name` must stay aligned to
  `provision.json`.
- Header and footer identity must use the same charts-specific logo mark as the
  favicon source.

## Analytics expectations

- Funnel and page events are implemented via `useSiteAnalytics()`.
- Supported event names are:
  - `site_cta_click`
  - `site_nav_click`
  - `showcase_page_view`
  - `docs_page_view`
  - `api_doc_view`
  - `docs_code_copy`
  - `github_outbound_click`
  - `site_lead_start`
  - `site_lead_submit`
- New CTAs or lead flows must either use those events or extend the composable
  intentionally.

## Acceptance: every chart is showcased

For every exported `Narduk*Chart` component in `narduk-charts/src/index.ts`,
there exists:

1. A live interactive example on its showcase route.
2. An `api-docs.ts` entry and `/docs/api/[slug]` page.
3. A card on `/showcase` linking to both.

## Anti-drift rules

1. Adding a chart component to `narduk-charts` exports requires updates to this
   contract, `chartFamilies`, showcase routes, and API docs before merge.
2. Adding a public composable or utility requires an API doc entry and, when
   user-visible, either a docs or showcase explanation.
3. Removing or renaming props/events requires the showcase snippets and API docs
   to be updated in the same PR.
4. New support routes must be added to `apps/web/app/data/site.ts` when they are
   intended to be discoverable from footer or contextual navigation.
5. Site docs do not replace source-of-truth artifacts in the library repo such
   as the security policy or `CHANGELOG.md`; they may summarize or link them.
