import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import FastifyStatic from '@fastify/static'
import config from './config'
import { resolve } from 'node:path'

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
    reply.send('hello!')
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
  },
)
