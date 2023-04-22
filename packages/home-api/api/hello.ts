import { $ApiInfo, Reply } from './base'

export async function getHelloMsg(info: $ApiInfo<{ name: string; id: number }>) {
  const data = 'hello'

  return Reply.success(data)
}
