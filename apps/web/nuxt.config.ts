import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const localNuxtPort = Number(process.env.NUXT_PORT || 3000)
const localAppUrl = `http://localhost:${Number.isFinite(localNuxtPort) ? localNuxtPort : 3000}`
const siteUrl = process.env.SITE_URL || ''

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Extend the published Narduk Nuxt Layer
  extends: ['@narduk-enterprises/narduk-nuxt-template-layer'],

  css: ['@narduk-enterprises/narduk-charts/style.css'],

  // nitro-cloudflare-dev proxies D1 bindings to the local dev server
  modules: ['nitro-cloudflare-dev'],

  nitro: {
    cloudflareDev: {
      configPath: resolve(__dirname, 'wrangler.json'),
      ...(process.env.NUXT_WRANGLER_ENVIRONMENT
        ? { environment: process.env.NUXT_WRANGLER_ENVIRONMENT }
        : {}),
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  devServer: {
    port: Number.isFinite(localNuxtPort) ? localNuxtPort : 3000,
  },

  runtimeConfig: {
    posthogOwnerDistinctId: process.env.POSTHOG_OWNER_DISTINCT_ID || '',
    // Server-only (admin API routes)
    googleServiceAccountKey: process.env.GSC_SERVICE_ACCOUNT_JSON || '',
    posthogApiKey: process.env.POSTHOG_PERSONAL_API_KEY || '',
    gaPropertyId: process.env.GA_PROPERTY_ID || '',
    posthogProjectId: process.env.POSTHOG_PROJECT_ID || '',
    public: {
      appUrl: process.env.SITE_URL || localAppUrl,
      appName: process.env.APP_NAME || 'Narduk Charts',
      /** Stonx market-data WebSocket + HTTPS (AAPL flagship demo). */
      cspConnectSrc: [
        process.env.CSP_CONNECT_SRC?.trim(),
        'wss://stonx.app',
        'https://stonx.app',
      ]
        .filter((s): s is string => Boolean(s && s.length > 0))
        .join(','),
      // Analytics (client-side tracking)
      posthogPublicKey: process.env.POSTHOG_PUBLIC_KEY || '',
      posthogHost: process.env.POSTHOG_HOST || 'https://us.i.posthog.com',
      gaMeasurementId: process.env.GA_MEASUREMENT_ID || '',
      // IndexNow
      indexNowKey: process.env.INDEXNOW_KEY || '',
    },
  },

  site: {
    ...(siteUrl ? { url: siteUrl } : {}),
    name: 'Narduk Charts',
    description:
      'Vue 3 SVG charting for trading platforms: OHLC, multi-pane sync, studies, and production-grade interactions.',
    defaultLocale: 'en',
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Narduk Charts',
      ...(siteUrl ? { url: siteUrl } : {}),
      logo: '/favicon.svg',
    },
  },

  image: {
    cloudflare: {
      ...(siteUrl ? { baseURL: siteUrl } : {}),
    },
  },

  routeRules: {
    '/examples': { redirect: { to: '/docs/examples', statusCode: 301 } },
    '/examples/': { redirect: { to: '/docs/examples', statusCode: 301 } },
    '/examples/aapl': { redirect: { to: '/docs/examples/aapl', statusCode: 301 } },
    '/examples/trading': { redirect: { to: '/showcase/candle', statusCode: 301 } },
    '/examples/candle': { redirect: { to: '/showcase/candle', statusCode: 301 } },
    '/examples/line': { redirect: { to: '/showcase/line', statusCode: 301 } },
    '/examples/bar': { redirect: { to: '/showcase/bar', statusCode: 301 } },
    '/examples/pie': { redirect: { to: '/showcase/pie', statusCode: 301 } },
    '/examples/scatter': { redirect: { to: '/showcase/scatter', statusCode: 301 } },
    '/examples/histogram': { redirect: { to: '/showcase/histogram', statusCode: 301 } },
    '/examples/streaming': { redirect: { to: '/showcase/capabilities/realtime', statusCode: 301 } },
    '/playground': { redirect: { to: '/showcase', statusCode: 301 } },
    '/playground/': { redirect: { to: '/showcase', statusCode: 301 } },
  },
})
