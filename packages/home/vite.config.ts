import { defineConfig, PluginOption } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import AutoImportComponents from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
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
    },
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
    },
    plugins: [
      // fixRpxPlugin,
      AutoImport({
        imports: ['vue', 'vue-router'],
        resolvers: [ArcoResolver()],
      }),
      AutoImportComponents({
        resolvers: [
          ArcoResolver({
            sideEffect: true,
          }),
          // (name: string) => {
          //   if (!name.match(/^Hd[A-Z]/)) return
          //   const partialName = kebabCase(name)
          //
          //   return resolve(
          //     `libs/fant-mini-plus/components/${partialName}/${partialName}.vue`,
          //   ).replaceAll('\\', '/')
          // },
        ],
      }),
      UnoCSS({ hmrTopLevelAwait: false, presets: [] }),
      vue(),
    ],
  }
})

function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

// uniapp
const fixRpxPlugin: PluginOption = {
  name: 'fixRpxPlugin',
  enforce: 'pre',
  transform(code: string, id: string, options) {
    return code.replace(/(\d)\srpx/g, '$1rpx')
  },
}
