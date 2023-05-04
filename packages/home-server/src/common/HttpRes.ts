import { FastifyReply, FastifyRequest } from 'fastify'

export type ApiInput<T, Q = never> = FastifyRequest<{
  Querystring: Q
  Body: T
}>
export type ApiOutput<T> = FastifyReply<any, any, any, any, any, any, any, T>

export default abstract class HttpRes {}
