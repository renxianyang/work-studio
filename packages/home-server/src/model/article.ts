import { z } from 'zod'
import Entity from '@/model/Entity'

// 完整的数据库
const table = z.object({
  id: z.string().optional(),
  title: z.string(),
  cat: z.enum(['1', '2', '3']).default('1'),
})

// 数据模型
class Add extends Entity(
  table.pick({
    title: true,
    cat: true,
  }),
) {
  get list() {
    console.log(this.cat, this.title)
    return this.cat + this.title
  }
}

export class ArticleModel {
  static Add = Add
}
