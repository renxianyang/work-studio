import app from '@/app'
import { ApiInput, ApiOutput } from '@/common/HttpRes'
import { ArticleModel } from '@/model/article'

const item = new ArticleModel.Add({
  title: '1',
})
console.log(item)
console.log(item.list)
console.log(item.cat)

app.get('/article', (request: ApiInput<{ code: string }>, reply: ApiOutput<{ code: number }>) => {
  reply.send({ code: 1 })
})
