import Fastify, { FastifyRequest, FastifyReply } from 'fastify'
import user from '@/api/user'

export default function regApi(app: ReturnType<typeof Fastify>) {
  const allApi: Record<string, any> = {
    user,
  }

  app.post(
    '/api/:apiUrl',
    async function (
      // https://www.fastify.cn/docs/latest/Request/
      request: FastifyRequest<{
        // Body?: RequestBodyDefault;
        // Querystring?: RequestQuerystringDefault;
        // Params?: RequestParamsDefault;
        // Headers?: RequestHeadersDefault;
        Params: { apiUrl: string }
      }>,
      reply: FastifyReply,
    ) {
      const [moduleName, methodName] = request.params.apiUrl.split('_')

      const handler = allApi[moduleName] && allApi[moduleName][methodName]
      if (typeof handler !== 'function') {
        reply.send({
          code: 404,
        })
        return
      }

      const params: any = request.method === 'GET' ? request.query : request.body
      // if (request.headers['content-type']?.startsWith('multipart/form-data;')) {
      //   for (const k in params) {
      //     params[k] = params[k].value || params[k].file
      //   }
      // }

      let payload = null,
        error: any = null
      try {
        payload = await handler(params)
      } catch (err) {
        error = err
      }

      // 统一格式
      if (error) {
        reply.send({
          code: 500,
          payload: null,
          error: error.message,
        })
      } else {
        reply.send({
          code: 200,
          payload,
          error: '',
        })
      }
    },
  )
}
