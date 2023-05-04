import { UserInfoModel } from '@app/home-server/src/model/user.modal'

export const userInfoState = reactive<UserInfoModel>(new UserInfoModel({}))
