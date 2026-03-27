Status: **LOCKED** (2026-03-26)

# UI plan — Narduk Charts public site

## Design principles

- **Dark-forward / trading credible:** default to muted surfaces, sharp borders, primary accent sparingly.
- **Chart-first:** hero and showcase pages lead with live `narduk-charts` renders inside `ClientOnly` where needed.
- **Readable docs:** left rail on desktop (`DocsAside`), single column prose, prop tables as stacked grids (no raw HTML tables).

## Top-level navigation (`SiteHeader`)

- **Product** (popover): features, performance, theming, integration, enterprise.
- **Showcase** (popover): chart family routes + capability tours + capabilities index.
- **Docs** (popover): ordered docs map from `apps/web/app/data/site.ts`.
- **Enterprise** (direct link).
- **GitHub** (outbound, library).
- **Get started** → `/docs/quickstart`.
- **Color mode** cycle + **mobile** `USlideover` menu mirroring the same structure.

## Layouts

| Layout | Use |
| --- | --- |
| `marketing` | Home, product, showcase (header + footer, full-width sections via `UContainer`). |
| `docs` | All `/docs/**` pages + API reference (header, footer, `DocsAside` + content column). |

## Homepage section order (`/`)

1. Hero: headline, subhead, primary/secondary/GitHub CTAs, credibility chips, **live candle** preview card.
2. What the library is (scope statement).
3. Core capabilities (six cards).
4. Chart family grid (links to showcase routes).
5. Developer experience (install/CSS/subpaths) + buttons to docs.
6. Enterprise readiness blurb + link.
7. CTA band (quick start + features).
8. Footer via `SiteFooter` (chart + capability + docs links).

## Showcase index (`/showcase`)

- Hero kicker + description.
- Responsive card grid: title, id badge, summary, **Live demo** + **API** buttons.
- Capability list as linked rows.

## Individual chart / capability demo template

- `UBreadcrumb` (Showcase → page).
- H1 + narrative.
- Optional control cluster (`UButton` toggles / `UCheckbox`).
- `LiveDemoPane` (title, description, `ClientOnly` slot).
- Two columns: **When to use** / **Interactions** (where relevant).
- `CodeBlock` with analytics context slug.
- Row of `UButton` links: API + related showcase/docs.

## Docs pages

- Consistent `prose` article width inside docs layout.
- Deep links from docs to showcase mirrors.

## API reference

- Index grouped by **Components / Composables / Utilities**.
- Detail pages: breadcrumb, summary, imports, props grid, models, events, slots, notes callout, example, related buttons.

## Code examples

- `CodeBlock.vue`: monospace, bordered, copy button (top-right), PostHog `docs_code_copy`.

## Responsive behavior

- Navigation collapses to slideover under `lg`.
- Chart cards stack single column on narrow screens; maintain `min-w-0` on chart containers.

## Design tokens

- Nuxt UI semantic colors (`primary`, `neutral`, `muted`, `highlighted`, `default`); avoid raw Tailwind palette classes in app code per ESLint.

## Dark / light

- Charts receive `dark` from `useChartAppearance()` tied to Nuxt Color Mode.
- Theming showcase demonstrates `theme` prop independent of site chrome.

## Live demo framing

- `LiveDemoPane` uses `UCard` body with header text; fallback skeleton for SSR.

## OG / screenshots

- Per-page `useSeo` + `ogImage`; optional future: dedicated OG templates for top routes (layer `OgImage`).
