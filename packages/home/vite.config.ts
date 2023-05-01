import { defineConfig, PluginOption } from 'vite'
import { resolve } from 'node:path'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import AutoImportComponents from 'unplugin-vue-components/vite'

const fixRpxPlugin: PluginOption = {
  name: 'fixRpxPlugin',
  enforce: 'pre',
  transform(code: string, id: string, options) {
    return code.replace(/(\d)\srpx/g, '$1rpx')
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   port: 3000,
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:3001/api',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
  build: {
    // target: 'chrome86',
    outDir: resolve('./dist/home'),
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  plugins: [
    fixRpxPlugin,
    AutoImport({
      imports: ['vue'],
    }),
    AutoImportComponents({
      resolvers: [
        (name: string) => {
          if (!name.match(/^Hd[A-Z]/)) return
          const partialName = kebabCase(name)

          return resolve(
            `src/common/libs/fant-mini-plus/components/${partialName}/${partialName}.vue`,
          ).replaceAll('\\', '/')
        },
      ],
    }),
    UnoCSS({ hmrTopLevelAwait: false, presets: [] }),
    uni(),
  ],
})

function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}
