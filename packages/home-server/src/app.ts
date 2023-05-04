import Fastify from 'fastify'
const app = Fastify({
    // logger: true,
    connectionTimeout: 1000 * 10, // xxx毫秒超时
})
export default app
