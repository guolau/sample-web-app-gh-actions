const { expect, test } = require('@playwright/test')

test.use({ actionTimeout: 10000 })

test('visit page and take screenshot', async ({ page }) => {
  const response = await page.goto(process.env.ENVIRONMENT_URL || 'https://sample-web-app-gh-actions.vercel.app/')
  await page.screenshot({ path: 'screenshot.jpg' })
  expect(response.status(), 'should respond with correct status code').toBeLessThan(400)
})
