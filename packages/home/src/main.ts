import config from './config'
import '@/common/request'

// 放在最后
import createApp from './createApp'

if (!config.dev) {
  const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js', {
            scope: '/',
          })
          .then(() => {
            console.info(`service worker is working`)
          })
      })
    }
  }

  registerServiceWorker()
}

const app = createApp()
app.mount('#app')



