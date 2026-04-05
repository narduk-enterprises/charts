interface SiteBreadcrumbItem {
  label: string
  to: string
}

export function useSiteBreadcrumbs(items: SiteBreadcrumbItem[]) {
  const config = useRuntimeConfig()
  const baseUrl = String(config.public.appUrl || '').replace(/\/$/, '')

  useBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/` },
    ...items.map((item) => ({
      name: item.label,
      url: `${baseUrl}${item.to.startsWith('/') ? item.to : `/${item.to}`}`,
    })),
  ])
}
