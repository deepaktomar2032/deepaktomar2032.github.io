import { description, interests } from '$lib/data/interests'
import fs from 'fs'
import path from 'path'

export function load() {
  const staticDir = path.join(process.cwd(), 'static', 'optimized-images', 'interests')

  const interestsWithImages = interests.map((interest) => {
    const pngPath = path.join(staticDir, `${interest.id}.png`)
    const hasImage = fs.existsSync(pngPath)

    return { ...interest, hasImage }
  })

  return { interests: interestsWithImages, description }
}
