/**
 * Funnel-oriented analytics for the charts marketing + docs surface.
 * Events are no-ops when PostHog is not configured (see layer `usePosthog`).
 */
export function useSiteAnalytics() {
  const { capture } = usePosthog()

  return {
    captureCta: (name: string, properties?: Record<string, unknown>) => {
      capture('site_cta_click', { cta: name, ...properties })
    },
    captureNav: (target: string) => {
      capture('site_nav_click', { target })
    },
    captureShowcaseView: (slug: string) => {
      capture('showcase_page_view', { slug })
    },
    captureDocsView: (slug: string) => {
      capture('docs_page_view', { slug })
    },
    captureApiView: (slug: string) => {
      capture('api_doc_view', { slug })
    },
    captureCodeCopy: (context: string) => {
      capture('docs_code_copy', { context })
    },
    captureLeadStart: (surface: string) => {
      capture('site_lead_start', { surface })
    },
    captureLeadSubmit: (surface: string) => {
      capture('site_lead_submit', { surface })
    },
    captureGithubOutbound: (destination: 'library' | 'site') => {
      capture('github_outbound_click', { destination })
    },
  }
}
