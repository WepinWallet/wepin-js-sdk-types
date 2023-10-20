import { IWepinUser } from '../../login/Login'

export type LoginWithEmailPasswordFunction = (
  email: string,
  password: string
) => IWepinUser
