import axios from 'axios'
import { Notification } from '@arco-design/web-vue'

const request = axios.create({
  timeout: 1000 * 10,
  baseURL: `http://localhost:3001/api`,
})

request.interceptors.response.use(
  function (response) {
    if (response.data.code !== 200) {
      Notification.error({
        title: 'ServerError',
        content: '好像发生了一个请求错误!',
        closable: true,
      })
      return null
    }

    return response.data.payload
  },
  function (error) {
    Notification.error({
      title: 'ServerError',
      content: '好像发生了一个请求错误!',
      closable: true,
    })

    console.log(error)
    return Promise.reject(error)
  },
)

export default request

// client
export function CREATE_CLIENT_API(moduleName: string) {
  return new Proxy(
    {},
    {
      get(target, methodName, receiver) {
        return function (data: object) {
          const apiUrl = `${moduleName}_${String(methodName)}`

          return request({
            method: 'POST',
            url: apiUrl,
            data,
          })
        }
      },
    },
  )
}


// @ts-ignore
window.CREATE_CLIENT_API = CREATE_CLIENT_API;
