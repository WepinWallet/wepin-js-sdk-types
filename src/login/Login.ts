export interface IWepinUser {
  status: 'success' | 'fail'
  userInfo: UserInfo
}
interface UserInfo {
  userId: string
  email: string
  provider: 'google' | 'apple'
}

export type LoginFunction = () => Promise<IWepinUser>
