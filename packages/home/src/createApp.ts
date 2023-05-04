import { createApp as _createApp } from 'vue'
import 'virtual:uno.css'
import App from './App.vue'
import createRouter from './common/router/createRouter'
import '@arco-design/web-vue/dist/arco.css'
import './state'

export default function createApp() {
  const app = _createApp(App)

  /* router */
  const router = createRouter()
  app.use(router)

  return app
}
