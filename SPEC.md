Status: **LOCKED** (2026-04-05)

# Narduk Charts — Public site specification

## Purpose

`narduk-enterprises/charts` is the canonical public product surface for
`narduk-enterprises/narduk-charts`.

The site must let buyers and engineers answer, without guesswork:

- Which chart families and interaction models actually ship.
- How to install, theme, and integrate the library in production Vue apps.
- How the library fits brokerage, terminal, and embedded market-product
  contexts.
- What the support, pricing, changelog, and security posture look like without
  inventing SaaS behaviors that do not exist.

## Site model

- **Primary surfaces:** `/product/*`, `/showcase/*`, and `/docs/*`.
- **Secondary support surfaces:** `/use-cases/*`, `/pricing`, `/contact`,
  `/about`, `/changelog`, `/security`, `/privacy`, `/terms`.
- **Navigation rule:** keep the primary header focused on Product, Showcase,
  Docs, Enterprise, GitHub, Contact, and Get started. Secondary surfaces stay
  discoverable through footer and contextual links rather than a marketing-first
  header rewrite.

## Audience segments

| Segment               | Needs                                                                 |
| --------------------- | --------------------------------------------------------------------- |
| Evaluators / buyers   | Credibility, scope clarity, support path, and integration risk.       |
| Frontend engineers    | Install paths, API tables, copy-ready examples, and release guidance. |
| Design system owners  | Theming tokens, accessibility posture, and embeddability.             |
| Trading product teams | OHLC behavior, sync models, export flows, and desk-oriented examples. |

## Information architecture

- **Homepage:** `/` remains the overview entry for product framing.
- **Product:** `/product/features`, `/product/performance`, `/product/theming`,
  `/product/integration`, `/product/enterprise`.
- **Showcase:** `/showcase` plus the chart-family and capability routes mapped
  from public exports.
- **Docs:** `/docs` plus installation, quickstart, examples, API reference, and
  supporting docs routes already present in `apps/web/app/data/site.ts`.
- **Support:** `/use-cases`, `/use-cases/brokerage`, `/use-cases/terminals`,
  `/pricing`, `/contact`, `/about`, `/changelog`, `/security`, `/privacy`,
  `/terms`.

## Docs and source-of-truth rules

- `/docs` remains the canonical on-site docs hub for evaluators and
  implementers.
- Source-adjacent artifacts stay in the library repository: release history
  (`CHANGELOG.md`), source tree, package releases, and security policy.
- The site may link to those artifacts, but it does not replace them or fork
  their authority.

## Support and commercial posture

- `/contact` is a lightweight mailto-based technical inquiry path.
- `/pricing` explains MIT licensing plus direct enterprise support; no fake SKU
  tables, gated forms, or SaaS billing model.
- `/security`, `/privacy`, and `/terms` are site-scoped static pages and remain
  indexable public routes.

## Brand direction

- Preserve the current dark-forward, technical product language.
- Replace the generic `N4`/activity identity with a charts-specific cyan mark
  used consistently in the header, footer, favicon source, and generated icon
  assets.
- Keep public naming aligned with `provision.json`: `Narduk Charts` is the site
  and manifest name.

## Analytics

- Use `useSiteAnalytics()` only.
- Required events: `site_cta_click`, `site_nav_click`, `showcase_page_view`,
  `docs_page_view`, `api_doc_view`, `docs_code_copy`, `github_outbound_click`,
  `site_lead_start`, `site_lead_submit`.
- Analytics must remain no-op safe when PostHog is unconfigured.

## Trust and quality bar

- Examples and showcases must compile against the pinned
  `@narduk-enterprises/narduk-charts` version in `pnpm-lock.yaml`.
- No placeholder “coming soon” content on any route covered by `CONTRACT.md`.
- New support routes should feel native to the current site rather than reviving
  a parallel marketing-only IA or component namespace.

## Related artifacts

- `UI_PLAN.md` — layout, navigation, and brand guidance.
- `CONTRACT.md` — required routes, metadata, and anti-drift rules.
