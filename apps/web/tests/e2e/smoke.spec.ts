import { expect, test, waitForBaseUrlReady, waitForHydration, warmUpApp } from './fixtures'

test.describe('web smoke', () => {
  test.beforeAll(async ({ browser, baseURL }) => {
    if (!baseURL) {
      throw new Error('web smoke tests require Playwright baseURL to be configured.')
    }

    await waitForBaseUrlReady(baseURL)
    await warmUpApp(browser, baseURL)
  })

  test('home page renders the product hero', async ({ page }) => {
    await page.goto('/')
    await waitForHydration(page)
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: /Precision charting for serious market software/i,
      }),
    ).toBeVisible()
    await expect(page.getByText(/@narduk-enterprises\/narduk-charts/).first()).toBeVisible()
    await expect(page).toHaveTitle(/Narduk Charts/)
  })
})
