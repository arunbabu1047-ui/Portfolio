import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import puppeteer from 'puppeteer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const htmlPath = resolve(__dirname, '..', 'public', 'resume-arun-babu.html')
const pdfPath = resolve(__dirname, '..', 'public', 'resume-arun-babu.pdf')

const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' })
await page.pdf({
  path: pdfPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '16mm', right: '14mm', bottom: '16mm', left: '14mm' },
})
await browser.close()

console.log(`PDF generated at ${pdfPath}`)
