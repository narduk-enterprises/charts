/** Maps Nuxt Color Mode to the library `dark` boolean used by chart components. */
export function useChartAppearance() {
  const colorMode = useColorMode()
  const chartDark = computed(() => colorMode.value === 'dark')
  return { colorMode, chartDark }
}
