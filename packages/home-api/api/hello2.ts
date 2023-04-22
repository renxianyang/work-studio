import { $ApiInfo, Reply } from './base'

export async function getHelloMsg2(info: $ApiInfo<{ name: string; id: number }>) {
  return Reply.success({
    method: info.method,
    msg: 'hello a1',
  })
}
