import { RouteRecordRaw } from 'vue-router'
/* layout 无需异步加载，减少请求 */
import EmptyLayout from '@/layouts/Empty.vue'
import BaseLayout from '@/layouts/Base/index.vue'

const viewDirPath = `../../pages`
const pages: any = import.meta.glob(`../../pages/**/**.vue`)
const importPage = (filePath: string) => {
  return pages[`${viewDirPath}/${filePath}.vue`]
}

/**
 * 除了 index.vue 其它文件全部用大驼峰写法，例如 dev/Menu.vue
 *
 * */
const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: BaseLayout,
    children: [
      {
        path: '',
        component: importPage('index/index'),
        meta: {},
      },
      {
        path: '/user',
        component: importPage('user/index'),
        meta: {},
      },
    ],
  },
  {
    path: '',
    component: EmptyLayout,
    redirect: '/dev',
    children: [
      {
        path: '/dev',
        component: importPage('dev/index'),
        meta: {},
      },
      {
        path: '/dev/menu',
        component: importPage('dev/Menu'),
        meta: {},
      },
    ],
  },
  // {
  //   path: '/Work',
  //   component: importPage('_layouts/index'),
  //   redirect: '/Work/Projects',
  //   meta: { icon: 'pi pi-desktop', title: '工作' },
  //   children: [
  //     {
  //       path: 'index',
  //       component: importPage('Work/index'),
  //       meta: { title: '工作空间' },
  //     },
  //     {
  //       path: 'Projects',
  //       component: importPage('Work/Projects'),
  //       meta: { title: '项目信息', ssr: true },
  //     },
  //   ],
  // },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
]

export default routes;
