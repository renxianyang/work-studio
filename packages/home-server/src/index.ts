import config from './config'
import app from './app'
import FastifyStatic from '@fastify/static'
import FastifyMultipart from '@fastify/multipart'
import FastifyCors from '@fastify/cors'
import { resolve } from 'node:path'
import './routes'

// 跨域
app.register(FastifyCors)

// form data
app.register(FastifyMultipart, {
  attachFieldsToBody: true, // 需手动解析
  // attachFieldsToBody: 'keyValues',
  limits: {
    fieldNameSize: 100, // Max field name size in bytes
    fieldSize: 100, // Max field value size in bytes
    fields: 10, // Max number of non-file fields
    fileSize: 1000000, // For multipart forms, the max file size in bytes
    files: 1, // Max number of file fields
    headerPairs: 2000, // Max number of header key=>value pairs
  },
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
    // reply.redirect('/')
    reply.send('吕小布在此，有何贵干？')
  },
)

app.setErrorHandler(function (error, request, reply) {
  reply.send({ code: 500, err: error.message })
})

// 超时
app.addHook('onTimeout', (request, reply, done) => {
  // Some code
  // onTimeout如果您需要监控服务中超时的请求（如果connectionTimeout在 Fastify 实例上设置了该属性），则该方法很有用。
  // onTimeout当请求超时并且 HTTP 套接字已挂起时执行挂钩。因此，您将无法向客户端发送数据。

  done()
})

// server
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
