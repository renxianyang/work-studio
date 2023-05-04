import { z } from 'zod'
import Entity from './Entity'

// 完整的数据库
const table = z.object({
  id: z.string().optional(),
  favContentType: z.enum(['1', '2', '99']).default('99'),
})

// 数据模型
export class UserInfoModel extends Entity(
  table.pick({
    favContentType: true,
  }),
) {
  get avatar() {
    return '/vite.svg'
  }
}
