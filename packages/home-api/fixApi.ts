const apiStore = {
  hello: () => import('./api/hello'),
  hello2: () => import('./api/hello2'),
  todo: () => import('./api/todo'),
}

export default function getApi(apiName: string) {
  return apiStore[apiName] ? apiStore[apiName]() : Promise.reject(new Error(''))
}
