Status: **LOCKED** (2026-04-05)

# UI plan — Narduk Charts public site

## Design principles

- **Dark-forward / trading credible:** preserve the current restrained,
  technical visual language.
- **Chart-first:** homepage, product, and showcase routes keep live chart
  examples and direct links into docs and API reference.
- **Support routes stay secondary:** new About, Contact, Pricing, Use cases, and
  legal pages should feel consistent with the core site, not like a second
  landing-page system.

## Brand and identity

- Primary site name stays `Narduk Charts`.
- Replace the generic activity/N4 icon with a **charts-specific mark**: dark
  rounded tile, cyan candlestick bars, and green baseline accent.
- Use the same mark in:
  - `SiteHeader`
  - `SiteFooter`
  - `apps/web/public/favicon.svg`
  - generated PNG/ICO assets and `site.webmanifest`

## Top-level navigation (`SiteHeader`)

- **Product** (popover): features, performance, theming, integration,
  enterprise.
- **Showcase** (popover): chart-family routes plus capability tours.
- **Docs** (popover): ordered docs map from `apps/web/app/data/site.ts`.
- **Enterprise** (direct link).
- **GitHub** (outbound, library).
- **Contact** (CTA, direct link).
- **Get started** → `/docs/quickstart`.
- **Color mode** cycle plus mobile `USlideover`.

## Footer strategy (`SiteFooter`)

- Footer is the main discovery surface for the secondary routes.
- Footer columns should cover:
  - brand / contact
  - product routes
  - use cases
  - support routes (pricing, contact, changelog, about)
  - docs/code/legal links

## Layouts

| Layout      | Use                                                                                  |
| ----------- | ------------------------------------------------------------------------------------ |
| `marketing` | Home, product, showcase, support, pricing, contact, about, changelog, and legal.     |
| `docs`      | All `/docs/**` pages + API reference (header, footer, `DocsAside` + content column). |

## Page templates

- **Primary product/showcase routes:** current patterns remain canonical.
- **Support pages:** `UContainer`, readable max-width copy, `UCard` for grouped
  content, and short CTA rows where helpful.
- **Use-case child pages:** visible `UBreadcrumb` plus breadcrumb schema helper.
- **Legal pages:** simple text-first marketing layout, no special chrome.

## Homepage and core routes

- Keep the current homepage section order and showcase/product/docs emphasis.
- Do not demote `/docs`, `/showcase`, or `/product/*` in favor of a
  marketing-only IA.
- Support routes should be linked contextually from pricing, enterprise,
  changelog, footer, and use-case pages rather than inserted into every hero.

## Docs and API presentation

- Docs remain prose-first with explicit links into showcase and API routes.
- API reference remains grouped by components, composables, and utilities.
- External links to GitHub are acceptable for source-adjacent artifacts such as
  the changelog or security policy.

## Responsive behavior

- Navigation collapses to slideover under `lg`.
- Contact CTA remains available on both desktop and mobile.
- Footer can expand column count on larger breakpoints, but secondary links
  should still scan cleanly on smaller widths.

## Design tokens and visuals

- Continue using Nuxt UI semantic tokens and shared app-level CSS utilities.
- Avoid introducing a second palette system or raw one-off styles for support
  pages.
- Favicon manifest colors should align with the new cyan mark while public
  naming stays in parity with `provision.json`.
