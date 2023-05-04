import app from '@/app'
import { ApiInput, ApiOutput } from '@/common/HttpRes'
import { UserInfoModel } from '@/model/user.modal'

app.get('/getUserInfo', (request: ApiInput<{}>, reply: ApiOutput<UserInfoModel>) => {
  const user = new UserInfoModel({})
  console.log(user)

  reply.send(user)
})
