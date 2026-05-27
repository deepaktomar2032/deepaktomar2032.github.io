import { cpSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const src = resolve(root, 'content', 'static')
const dest = resolve(root, 'static')

if (!existsSync(src)) {
  console.log('No content/static directory found, skipping asset copy.')
  process.exit(0)
}

cpSync(src, dest, { recursive: true, force: true })
console.log('Copied content/static → static/')
