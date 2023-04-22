import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import FastifyStatic from '@fastify/static'
import config from './config'
import { $ApiInfo } from './api/base'
import getApi from './fixApi'
import { resolve } from 'node:path'
import connectDB from './connectDB'

connectDB()

const app = Fastify({
  logger: false,
  connectionTimeout: 10000, // xxx毫秒超时
})

// 超时
app.addHook('onTimeout', (request, reply, done) => {
  // Some code
  // onTimeout如果您需要监控服务中超时的请求（如果connectionTimeout在 Fastify 实例上设置了该属性），则该方法很有用。
  // onTimeout当请求超时并且 HTTP 套接字已挂起时执行挂钩。因此，您将无法向客户端发送数据。

  done()
})

// 静态服务器
app.register(FastifyStatic, {
  root: resolve('./dist/home'),
})

// 伪静态
app.setNotFoundHandler(
  {
    preValidation: (req, reply, done) => {
      // your code
      done()
    },
    preHandler: (req, reply, done) => {
      // your code
      done()
    },
  },
  function (request, reply) {
    reply.redirect('/')
  },
)

app.all(
  '/api/:apiName',
  function (
    // https://www.fastify.cn/docs/latest/Request/
    request: FastifyRequest<{
      // Body?: RequestBodyDefault;
      // Querystring?: RequestQuerystringDefault;
      // Params?: RequestParamsDefault;
      // Headers?: RequestHeadersDefault;
      Params: { apiName: string }
    }>,
    reply: FastifyReply,
  ) {
    const { apiName: api } = request.params
    if (!api) {
      reply.send('hello!')

      // 假装未解析。。。
      // reply.status(502).send('')
      return
    }

    request.body = request.body || {}
    const apiInfo = {
      headers: {
        cookie: request.headers.cookie,
      },
      method: request.method,
      body: request.body,
    } as $ApiInfo

    const sendError = (reply) => {
      reply.status(404).send(`${apiInfo.method}->${api}->${apiInfo.body.code} error!`)
    }

    getApi(api).then(
      async (module) => {
        const apiFunc = module[apiInfo.body.code]
        if (typeof apiFunc !== 'function') {
          sendError(reply)
          return
        }

        const res = await apiFunc(<any>apiInfo).catch((err) => {
          console.info(err.message)
          return Promise.resolve(null)
        })

        if (!res) {
          sendError(reply)
          return
        }

        reply.status(res.code || 200).send(res)
      },
      (err) => {
        console.info(err.message)
        sendError(reply)
      },
    )
  },
)

app.listen(
  {
    host: '0.0.0.0',
    port: config.port,
  },
  (err, address) => {
    if (err) throw err

    console.info(`server start http://localhost:${config.port}`)

    // Server is now listening on ${address}
  },
)
