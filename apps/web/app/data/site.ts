/** Canonical outbound links and marketing constants for the public site. */
export const LIBRARY_GITHUB_HREF = 'https://github.com/narduk-enterprises/narduk-charts'
export const SITE_REPO_HREF = 'https://github.com/narduk-enterprises/charts'
export const NPM_PACKAGE_NAME = '@narduk-enterprises/narduk-charts'
export const LIBRARY_CHANGELOG_HREF = `${LIBRARY_GITHUB_HREF}/blob/main/CHANGELOG.md`
export const LIBRARY_SECURITY_HREF = `${LIBRARY_GITHUB_HREF}/security`
export const LIBRARY_ISSUES_HREF = `${LIBRARY_GITHUB_HREF}/issues`

export type SiteNavItem = { label: string; to: string; description?: string }
export type SiteNavGroup = { label: string; items: SiteNavItem[] }

export const productNav: SiteNavItem[] = [
  {
    label: 'Features',
    to: '/product/features',
    description: 'Capabilities mapped to real library APIs.',
  },
  {
    label: 'Performance',
    to: '/product/performance',
    description: 'SVG budgets, aggregation, and render strategy.',
  },
  {
    label: 'Theming',
    to: '/product/theming',
    description: 'Trading-credible light/dark and accessibility themes.',
  },
  {
    label: 'Integration',
    to: '/product/integration',
    description: 'Nuxt, Vite, tree-shakable entries, exports.',
  },
  {
    label: 'Enterprise',
    to: '/product/enterprise',
    description: 'Evaluation criteria for trading and fintech teams.',
  },
]

export const showcaseNav: SiteNavItem[] = [
  { label: 'Showcase index', to: '/showcase' },
  { label: 'Candlestick & OHLC', to: '/showcase/candle' },
  { label: 'Line & area', to: '/showcase/line' },
  { label: 'Bar', to: '/showcase/bar' },
  { label: 'Pie & donut', to: '/showcase/pie' },
  { label: 'Scatter', to: '/showcase/scatter' },
  { label: 'Histogram', to: '/showcase/histogram' },
  { label: 'Chart stack', to: '/showcase/chart-stack' },
]

export const capabilityNav: SiteNavItem[] = [
  { label: 'Capabilities index', to: '/showcase/capabilities' },
  { label: 'Interactions & zoom', to: '/showcase/capabilities/interactions' },
  { label: 'Synchronized panes', to: '/showcase/capabilities/synchronized' },
  { label: 'Realtime buffers', to: '/showcase/capabilities/realtime' },
  { label: 'Studies & indicators', to: '/showcase/capabilities/studies' },
  { label: 'Theming', to: '/showcase/capabilities/theming' },
  { label: 'Export & fullscreen', to: '/showcase/capabilities/export-fullscreen' },
]

export const docsNav: SiteNavItem[] = [
  { label: 'Docs home', to: '/docs' },
  { label: 'Examples', to: '/docs/examples' },
  { label: 'Installation', to: '/docs/installation' },
  { label: 'Quick start', to: '/docs/quickstart' },
  { label: 'Core concepts', to: '/docs/concepts' },
  { label: 'Data shapes', to: '/docs/data' },
  { label: 'Composition', to: '/docs/composition' },
  { label: 'Theming & styling', to: '/docs/theming' },
  { label: 'Events & callbacks', to: '/docs/events' },
  { label: 'Performance', to: '/docs/performance' },
  { label: 'Realtime patterns', to: '/docs/realtime' },
  { label: 'Layout & responsiveness', to: '/docs/layout' },
  { label: 'Trading UI notes', to: '/docs/trading-ui' },
  { label: 'Accessibility', to: '/docs/accessibility' },
  { label: 'FAQ', to: '/docs/faq' },
  { label: 'Migration', to: '/docs/migration' },
  { label: 'API reference', to: '/docs/api' },
]

export const useCaseNav: SiteNavItem[] = [
  {
    label: 'Use cases overview',
    to: '/use-cases',
    description: 'Buyer-context routes for brokerage, terminals, and embedded surfaces.',
  },
  {
    label: 'Brokerage platforms',
    to: '/use-cases/brokerage',
    description: 'Brand-safe charting for retail and pro brokerage experiences.',
  },
  {
    label: 'Terminals & research',
    to: '/use-cases/terminals',
    description: 'Linked panes and desk workflows coordinated in Vue state.',
  },
]

export const supportNav: SiteNavItem[] = [
  {
    label: 'Pricing',
    to: '/pricing',
    description: 'MIT licensing plus enterprise support positioning.',
  },
  {
    label: 'Contact',
    to: '/contact',
    description: 'Lightweight mailto-based evaluation and support inquiry route.',
  },
  {
    label: 'Changelog',
    to: '/changelog',
    description: 'Release themes with links to the source changelog.',
  },
  {
    label: 'About',
    to: '/about',
    description: 'Why the charts site and library repo are intentionally split.',
  },
]

export const legalNav: SiteNavItem[] = [
  {
    label: 'Security',
    to: '/security',
    description: 'Security posture, disclosure path, and reliability framing.',
  },
  {
    label: 'Privacy',
    to: '/privacy',
    description: 'Site-scoped privacy notice for analytics and mailto contact.',
  },
  {
    label: 'Terms',
    to: '/terms',
    description: 'Site terms and MIT-license pointer for the library.',
  },
]

/** Inventory aligned with `narduk-charts` public components (CONTRACT source of truth). */
export const chartFamilies = [
  {
    id: 'candle',
    name: 'Candlestick & OHLC',
    route: '/showcase/candle',
    summary: 'Time-series OHLCV with zoom, brush, volume, crosshair, drawings, and domain sync.',
    api: '/docs/api/narduk-candle-chart',
  },
  {
    id: 'line',
    name: 'Line & area',
    route: '/showcase/line',
    summary: 'Multi-series category charts with dual axes, zoom, annotations, and legends.',
    api: '/docs/api/narduk-line-chart',
  },
  {
    id: 'bar',
    name: 'Bar',
    route: '/showcase/bar',
    summary: 'Grouped or stacked bars, percent stacks, reference lines, and bands.',
    api: '/docs/api/narduk-bar-chart',
  },
  {
    id: 'pie',
    name: 'Pie & donut',
    route: '/showcase/pie',
    summary: 'Part-to-whole distributions with donut mode and slice interaction.',
    api: '/docs/api/narduk-pie-chart',
  },
  {
    id: 'scatter',
    name: 'Scatter',
    route: '/showcase/scatter',
    summary: 'Numeric X/Y correlation plots for risk and factor-style views.',
    api: '/docs/api/narduk-scatter-chart',
  },
  {
    id: 'histogram',
    name: 'Histogram',
    route: '/showcase/histogram',
    summary: 'Return or PnL distributions via auto bins or explicit bucket definitions.',
    api: '/docs/api/narduk-histogram-chart',
  },
  {
    id: 'chart-stack',
    name: 'Chart stack',
    route: '/showcase/chart-stack',
    summary: 'Layout primitive for linked candle + indicator rows sharing a time domain.',
    api: '/docs/api/narduk-chart-stack',
  },
] as const
