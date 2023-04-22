import yargs from 'yargs'
import path from 'node:path'
import fs from 'node:fs'
import cp from 'node:child_process'
import esbuild from 'esbuild'

/**
 * 使用方式
 * node build --app=console
 * */

function resolve(p) {
  return path.join(process.cwd(), p)
}

const argv = yargs(process.argv).argv

if (!argv.app) {
  throw '未检测到参数 app'
}

build()

function build() {
  const outputDir = `dist/${argv.app}`

  // 清理文件
  try {
    fs.rmdirSync(outputDir, { recursive: true })
  } catch (err) {}

  try {
    // format esm 的坑 - https://github.com/evanw/esbuild/pull/2067
    const buildOptions = {
      entryPoints: [`packages/${argv.app}/index.ts`],
      outfile: `${outputDir}/index.mjs`,
      format: 'esm', // esm
      target: 'esnext',
      platform: 'node',
      banner: {
        js: `import { createRequire } from 'module';const require = createRequire(import.meta.url);`, // fix 无法转换为 esm 的模块
      },
      bundle: true,
      external: ['/node_modules/*'],
    }
    esbuild.build(buildOptions).then(
      () => {
        console.info('打包成功')
      },
      (err) => {
        console.log(err)
        console.info('打包失败')
      },
    )
  } catch (err) {
    console.log(err)
    console.info('打包失败')
  }
}
