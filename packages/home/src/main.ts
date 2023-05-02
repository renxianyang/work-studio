import { createSSRApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import fantUI from '../libs/fant-mini-plus'

export function createApp() {
  const app = createSSRApp(App)
  app.config.warnHandler = () => null
  app.use(fantUI)

  return {
    app,
  }
}
