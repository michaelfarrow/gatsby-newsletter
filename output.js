const puppeteer = require('puppeteer')
const getPort = require('get-port')
const handler = require('serve-handler')
const http = require('http')
const fs = require('fs-extra')
const promiseSeries = require('promise.series')

const VIEWPORT_WIDTH = 900

const OUTPUT_ALL = process.argv.includes('--all')

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: './public',
  })
})

async function getIssues() {
  const path = './src/issues'
  const result = []
  const files = await fs.readdir(path)

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const filePath = path + '/' + file
    const stat = await fs.stat(filePath)
    if (!stat.isDirectory() && filePath.match(/\.md$/)) {
      result.push(file)
    }
  }
  return result
}

async function startServer(port) {
  return server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
  })
}

async function start() {
  const port = await getPort()
  await startServer(port)
  await snapshot(port)
  process.exit()
}

async function snapshotIssue(port, page, issue) {
  const date = issue.match(/(.*?)\.md$/)[1]
  const outPath = `./pdf/${date}.pdf`

  if (!OUTPUT_ALL && (await fs.pathExists(outPath))) {
    console.log(`Issue "${issue}" exists, didn't output`)
    return
  }

  await page.goto(`http://localhost:${port}/issue/${date}`, {
    waitUntil: 'networkidle0',
  })

  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.offsetWidth,
      height: document.documentElement.offsetHeight,
      deviceScaleFactor: window.devicePixelRatio,
    }
  })

  await page.pdf({
    path: outPath,
    // format: 'A4',
    printBackground: true,
    // preferCSSPageSize: true,
    width: `${dimensions.width}px`,
    height: `${dimensions.height}px`,
    pageRanges: '1',
  })

  console.log(`Issue "${issue}" output`)
}

async function snapshot(port) {
  await fs.ensureDir('./pdf')

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.emulateMedia('print')
  await page.setViewport({ width: VIEWPORT_WIDTH, height: 600 })

  const issues = await getIssues()

  await promiseSeries(
    issues.map(issue => {
      return async () => {
        await snapshotIssue(port, page, issue)
      }
    })
  )

  await browser.close()
}

start()
