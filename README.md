# Narduk Charts — public site workspace

Public product site, docs hub, showcase surface, and support routes for the
**Narduk Charts** Vue charting library.

Repository split:

- `narduk-enterprises/charts` (this repo) owns the public site, docs curation,
  showcase flows, pricing/support posture, and SEO surface.
- `narduk-enterprises/narduk-charts` owns the library source, tests, package
  releases, and source-adjacent artifacts such as the canonical `CHANGELOG.md`
  and security policy.

## First Run

```bash
pnpm install
pnpm run validate
pnpm run db:migrate
doppler setup --project charts --config dev
doppler run -- pnpm run dev
```

## Workspace Shape

- `apps/web/` is the Nuxt app you ship.
- `layers/narduk-nuxt-layer/` is the shared Nuxt layer.
- `packages/eslint-config/` contains the shared lint plugins.
- `tools/` and `scripts/` contain local automation and helper commands.

## Public Surface

- `/product/*` explains features, performance, theming, integration, and
  enterprise fit.
- `/showcase/*` proves the shipped chart families and capability tours.
- `/docs/*` is the canonical on-site docs and API reference hub.
- Supporting routes such as `/use-cases`, `/pricing`, `/contact`, `/about`,
  `/changelog`, `/security`, `/privacy`, and `/terms` stay footer-heavy and
  support the primary evaluation flows.

## Ongoing Template Updates

Use the local sync tools to pull newer template infrastructure into this app:

```bash
pnpm run sync-template -- --from ~/new-code/narduk-nuxt-template
pnpm run update-layer -- --from ~/new-code/narduk-nuxt-template
```

## Deployment

Deployment is local-only:

```bash
cd apps/web && pnpm run db:migrate -- --remote
cd ../..
pnpm run ship
```
