// گرفتن اسکرین‌شات از صفحه‌ی اول همه‌ی پروژه‌ها و ذخیره در public/screenshots
//
// یک‌بار نصب:   npm install   &&   npx playwright install chromium
// اجرا:          npm run screenshots
//
// بعد از اجرا هر پروژه یک فایل <slug>.jpg دارد و سایت اول از همین فایل‌ها استفاده می‌کند.
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { projects } from '../src/data.js'

const outDir = fileURLToPath(new URL('../public/screenshots/', import.meta.url))
await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  locale: 'fa-IR',
})

for (const p of projects) {
  if (!/^https?:/.test(p.live || '')) continue // بدون لینک آنلاین (یا فایل داخلی): از عکس دستی استفاده می‌شود
  const page = await context.newPage()
  const file = path.join(outDir, `${p.slug}.jpg`)
  try {
    await page.goto(p.live, { waitUntil: 'networkidle', timeout: 45000 })
  } catch {
    // بعضی سایت‌ها هیچ‌وقت networkidle نمی‌شوند؛ همین که بالا آمده کافی است
  }
  await page.waitForTimeout(3000) // صبر برای انیمیشن‌های ورودی (GSAP و ...)
  await page.screenshot({ path: file, type: 'jpeg', quality: 82 })
  console.log('✔', p.slug)
  await page.close()
}

await browser.close()
