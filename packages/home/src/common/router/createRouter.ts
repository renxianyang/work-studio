import {
  createRouter as _createRouter,
  createWebHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router'
import routes from './routes'

export default function createRouter() {
  const router = _createRouter({
    history: createWebHistory(),
    routes,
  })

  /* 此拦截器优先级最高 */
  router.beforeEach(firstBeforeEach)

  return router
}

function firstBeforeEach(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  next()
}
