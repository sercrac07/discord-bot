import { glob } from "glob"

export async function loadFiles(dir: string): Promise<string[]> {
  const isDev = __filename.endsWith(".ts")
  const fullPath = `${process.cwd().replaceAll("\\", "/")}/${isDev ? "src" : "dist"}`
  const files = await glob(`${fullPath}/${dir}/**/*.${isDev ? "ts" : "js"}`)
  files.forEach(file => delete require.cache[require.resolve(file)])
  return files
}
