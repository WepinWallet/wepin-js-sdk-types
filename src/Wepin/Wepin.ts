import { InitFunction } from '../init/InitFunction'
import { GetAccountsFunction } from '../account/GetAccountsFunction'
import { GetStatusFunction } from '../status/GetStatus'
import { LoginFunction } from '../login/Login'

export interface IWepin {
  init: InitFunction
  isInitialized: () => boolean
  openWidget: () => Promise<void>
  closeWidget: () => void
  getAccounts: GetAccountsFunction
  getStatus: GetStatusFunction
  login: LoginFunction
  logout(): () => Promise<void>
}
