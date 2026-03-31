import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const localNuxtPort = Number(process.env.NUXT_PORT || 3000)
const localAppUrl = `http://localhost:${Number.isFinite(localNuxtPort) ? localNuxtPort : 3000}`
const siteUrl = process.env.SITE_URL || ''

const appBackendPreset =
  process.env.APP_BACKEND_PRESET === 'managed-supabase' ? 'managed-supabase' : 'default'
const configuredAuthBackend = process.env.AUTH_BACKEND
const supabaseUrl = process.env.AUTH_AUTHORITY_URL || process.env.SUPABASE_URL || ''
const supabasePublishableKey =
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  process.env.SUPABASE_AUTH_ANON_KEY ||
  ''
const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_AUTH_SERVICE_ROLE_KEY || ''
const authBackend =
  configuredAuthBackend === 'supabase' || configuredAuthBackend === 'local'
    ? configuredAuthBackend
    : supabaseUrl && supabasePublishableKey
      ? 'supabase'
      : 'local'
const authAuthorityUrl = supabaseUrl
const appOrmTablesEntry =
  process.env.NUXT_DATABASE_BACKEND === 'postgres'
    ? './server/database/pg-app-schema.ts'
    : './server/database/app-schema.ts'

function parseAuthProviders(value: string | undefined) {
  return (value || 'apple,email')
    .split(',')
    .map((provider) => provider.trim().toLowerCase())
    .filter((provider, index, providers) => provider && providers.indexOf(provider) === index)
}

const authProviders =
  authBackend === 'supabase' ? parseAuthProviders(process.env.AUTH_PROVIDERS) : ['email']
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Extend the published Narduk Nuxt Layer
  extends: ['@narduk-enterprises/narduk-nuxt-template-layer'],

  alias: {
    '#server/app-orm-tables': fileURLToPath(new URL(appOrmTablesEntry, import.meta.url)),
  },

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
    appBackendPreset,
    authBackend,
    authAuthorityUrl,
    authAnonKey: supabasePublishableKey,
    authServiceRoleKey: supabaseServiceRoleKey,
    authStorageKey: process.env.AUTH_STORAGE_KEY || 'web-auth',
    turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY || '',
    supabaseUrl,
    supabasePublishableKey,
    supabaseServiceRoleKey,
    posthogOwnerDistinctId: process.env.POSTHOG_OWNER_DISTINCT_ID || '',
    // Server-only (admin API routes)
    googleServiceAccountKey: process.env.GSC_SERVICE_ACCOUNT_JSON || '',
    posthogApiKey: process.env.POSTHOG_PERSONAL_API_KEY || '',
    gaPropertyId: process.env.GA_PROPERTY_ID || '',
    posthogProjectId: process.env.POSTHOG_PROJECT_ID || '',
    public: {
      appBackendPreset,
      authBackend,
      authAuthorityUrl,
      authLoginPath: '/login',
      authRegisterPath: '/register',
      authCallbackPath: '/auth/callback',
      authConfirmPath: '/auth/confirm',
      authResetPath: '/reset-password',
      authLogoutPath: '/logout',
      authRedirectPath: '/dashboard/',
      authProviders,
      authPublicSignup: process.env.AUTH_PUBLIC_SIGNUP !== 'false',
      authRequireMfa: process.env.AUTH_REQUIRE_MFA === 'true',
      authTurnstileSiteKey: process.env.TURNSTILE_SITE_KEY || '',
      supabaseUrl,
      supabasePublishableKey,
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
