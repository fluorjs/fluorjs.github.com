import fs from "fs"
import path from "path"
import util from "util"

import React from "react"
import ReactDOM from "react-dom/server"
import { Helmet } from "react-helmet"
import fastGlob from "fast-glob"
import ora from "ora"
import chalk from "chalk"
import rimraf from "rimraf"
import postcss from "postcss"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const copyFile = util.promisify(fs.copyFile)
const mkdir = util.promisify(fs.mkdir)
const rmrf = util.promisify(rimraf)
const stat = util.promisify(fs.stat)

const SITE_ROOT = path.join(__dirname, "site")
const DIST_ROOT = path.join(__dirname, "dist")
const GLOB = path.join(SITE_ROOT, "**", "*")
const EXTENSION_MAP = {
  ".js": ".html",
}

async function spin(text, fn) {
  const spinner = ora(text).start()

  try {
    await fn(spinner)
    spinner.succeed()
  } catch (err) {
    spinner.fail()
    console.error(err)
    throw err
  }
}

function distRelative(path) {
  return path.replace(DIST_ROOT, "").slice(1)
}

function replaceExt(pathname) {
  const prevExt = path.extname(pathname)
  const newExt = EXTENSION_MAP[prevExt] || prevExt
  const dirname = path.dirname(pathname)
  const basename = path.basename(pathname, prevExt) + newExt

  return path.join(dirname, basename)
}

async function ensureDirectory(dir) {
  if (!fs.existsSync(dir)) {
    await spin(`mkdir /${distRelative(dir)}`, async () => {
      await mkdir(dir, { recursive: true })
    })
  }
}

async function updateSpinnerWithFileSize(file, spinner) {
  const stats = await stat(file)
  const size =
    stats.size < 1024
      ? `${stats.size}b`
      : `${~~((stats.size / 1024) * 100) / 100}kb`
  spinner.text += chalk.cyan(` ${size}`)
}

function expandScripts(markup) {
  return markup.replace(/SCRIPT\[([^\]]+)\]/, (_, b64) =>
    Buffer.from(b64, "base64").toString()
  )
}

async function renderPage(source, destination) {
  const Page = require(source).default
  const markup = expandScripts(ReactDOM.renderToStaticMarkup(<Page />))
  const helmet = Helmet.renderStatic()
  const html = pageTemplate(helmet, markup)
  await writeFile(destination, html)
}

function pageTemplate(helmet, markup) {
  return `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    ${markup}
    ${helmet.script.toString()}
  </body>
</html>`
}

async function renderCSS(source, destination) {
  const css = await readFile(source)
  const processed = await postcss([
    tailwindcss,
    autoprefixer,
    cssnano({ preset: "default" }),
  ]).process(css, {
    from: source,
    to: destination,
  })
  await writeFile(destination, processed.css)
  if (processed.map) {
    await writeFile(`${destination}.map`, processed.map)
  }
}

const HANDLERS = {
  ".js": renderPage,
  ".css": renderCSS,
}

void (async () => {
  await rmrf(path.join(DIST_ROOT, "*"))
  await ensureDirectory(DIST_ROOT)
  const sources = await fastGlob([GLOB])
  for (const source of sources) {
    const destination = replaceExt(source.replace(SITE_ROOT, DIST_ROOT))
    await ensureDirectory(path.dirname(destination))
    await spin(distRelative(destination), async (spinner) => {
      const handler = HANDLERS[path.extname(source)] || copyFile
      await handler(source, destination)
      await updateSpinnerWithFileSize(destination, spinner)
    })
  }
})()
