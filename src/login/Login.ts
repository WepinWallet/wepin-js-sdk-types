export interface IWepinUser {
  status: 'success' | 'fail'
  userInfo: UserInfo
}
interface UserInfo {
  userId: string
  email: string
  provider: 'google' | 'apple' | 'email' | 'discord' | 'naver'
}

export type LoginFunction = (email: string) => Promise<IWepinUser>
