export default function sw() {
  /**
   * https://www.jsjiami.com/
   *
   * */
  const CUR_SW_VERSION = '1.0.0' // 此变量有坑，请谨慎使用
  const getStorage = () => caches.open(CUR_SW_VERSION)

  /**
   * 另外，当有新版的Service Worker时，它在install之后进入waiting阶段，等待上一次的Service Worker结束（比如关掉页面）后，才会变成activate状态。
   * 为了让新版Service Worker能够自动激活，我们可以在install事件里调用skipWaiting方法：
   *
   * self.addEventListener('install', event => {
   *   self.skipWaiting();
   * });
   * */
  self.addEventListener('install', async (e) => {
    self.skipWaiting()
  })

  self.addEventListener('activate', (event) => {
    clients.claim()

    deleteOldCaches()
    console.info(`已启用新版本 ${CUR_SW_VERSION}`)
  })

  self.addEventListener('fetch', (event) => {
    autoCache(event)
  })

  const deleteOldCaches = async () => {
    await Promise.all(
      (await caches.keys())
        .filter((key) => key !== CUR_SW_VERSION)
        .map((key) => caches.delete(key)),
    )
  }

  /* cache */
  const staticFileRegex = /(.*?\.(?:css|js|woff2))(\?.*)?$/

  function getStaticFileInfo(url) {
    const res = url.match(staticFileRegex)
    if (!res) return null

    return {
      href: res[1],
      query: res[2],
    }
  }

  const autoCache = async (event) => {
    const { request } = event
    const fileInfo = getStaticFileInfo(request.url)

    // 非静态文件无需缓存
    if (!fileInfo) return

    if (/corepresscdn\/static/.test(fileInfo.href)) {
      // cdn
    }
    // 无版本号
    else if (!fileInfo.query) {
      return
    }

    event.respondWith(
      (async () => {
        const curCache = await caches.match(request)
        if (curCache) return curCache

        // 设置缓存
        const newCache = await fetch(request)
        await (await getStorage()).put(request, newCache)

        return fetch(request)
      })(),
    )
  }
}
