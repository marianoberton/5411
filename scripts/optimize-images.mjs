// Optimiza en su lugar todas las imágenes de public/images:
// redimensiona a máx 2560px el lado largo y recomprime. Mantiene nombre y
// formato (no rompe referencias). Solo sobreescribe si el nuevo archivo pesa
// menos que el original. Escribe a un temporal y reemplaza, para no corromper.
import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'

const ROOT = path.resolve('public/images')
const MAX_EDGE = 2560
const exts = new Set(['.jpg', '.jpeg', '.png', '.webp'])

async function walk(dir) {
    const out = []
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) out.push(...(await walk(full)))
        else if (exts.has(path.extname(entry.name).toLowerCase())) out.push(full)
    }
    return out
}

function encoder(pipeline, ext) {
    switch (ext) {
        case '.jpg':
        case '.jpeg':
            return pipeline.jpeg({ quality: 80, mozjpeg: true })
        case '.png':
            return pipeline.png({ compressionLevel: 9, effort: 10, quality: 82, palette: true })
        case '.webp':
            return pipeline.webp({ quality: 80 })
        default:
            return pipeline
    }
}

let beforeTotal = 0
let afterTotal = 0
let changed = 0

const files = await walk(ROOT)
console.log(`Procesando ${files.length} imágenes...\n`)

for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    const origSize = (await fs.stat(file)).size
    beforeTotal += origSize

    try {
        const img = sharp(file, { failOn: 'none' }).rotate()
        const meta = await img.metadata()
        const longest = Math.max(meta.width || 0, meta.height || 0)

        let pipeline = img
        if (longest > MAX_EDGE) {
            pipeline = pipeline.resize({
                width: meta.width >= meta.height ? MAX_EDGE : undefined,
                height: meta.height > meta.width ? MAX_EDGE : undefined,
                withoutEnlargement: true,
            })
        }

        const buf = await encoder(pipeline, ext).toBuffer()

        if (buf.length < origSize) {
            const tmp = file + '.tmp'
            await fs.writeFile(tmp, buf)
            await fs.rename(tmp, file)
            afterTotal += buf.length
            changed++
            const pct = ((1 - buf.length / origSize) * 100).toFixed(0)
            console.log(`✓ ${path.relative(ROOT, file)}  ${(origSize / 1048576).toFixed(1)}MB → ${(buf.length / 1048576).toFixed(2)}MB  (-${pct}%)`)
        } else {
            afterTotal += origSize // ya estaba optimizada
        }
    } catch (e) {
        afterTotal += origSize
        console.log(`✗ ${path.relative(ROOT, file)}  ERROR: ${e.message}`)
    }
}

console.log(`\n────────────────────────────`)
console.log(`Archivos optimizados: ${changed}/${files.length}`)
console.log(`Total: ${(beforeTotal / 1048576).toFixed(0)}MB → ${(afterTotal / 1048576).toFixed(0)}MB  (-${((1 - afterTotal / beforeTotal) * 100).toFixed(0)}%)`)
