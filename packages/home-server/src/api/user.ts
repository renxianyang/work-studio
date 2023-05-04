import { UserInfoModel } from '@app/home-model/user'

export default abstract class UserApi {
  static getUserInfo(data: UserInfoModel): UserInfoModel {
    const user = new UserInfoModel({})
    user.avatar = `https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp`

    return user
  }
}
