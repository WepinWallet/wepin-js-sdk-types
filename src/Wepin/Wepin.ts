import { InitFunction } from '../init/InitFunction'
import { GetAccountsFunction } from '../account/GetAccountsFunction'
import { GetStatusFunction } from '../status/GetStatus'
import { LoginFunction } from '../login/Login'
import { GetBalanceFunction } from '../admin/balance/getBalance'
import { RegisterFunction } from '../admin/register/register'
import { LoginWithEmailPasswordFunction } from '../admin/loginWithEmail/loginWithEmailAndPassword'
import { SignUpWithEmailFunction } from '../admin/signinWithEmail/signUpWithEmailAndPassword'

export interface IWepin {
  init: InitFunction
  isInitialized: () => boolean
  openWidget: () => Promise<void>
  closeWidget: () => void
  getAccounts: GetAccountsFunction
  getStatus: GetStatusFunction
  login: LoginFunction
  logout: () => Promise<void>
  signUpWithEmailAndPassword: SignUpWithEmailFunction
  loginWithEmailAndPassword: LoginWithEmailPasswordFunction
  register: RegisterFunction
  getBalance: GetBalanceFunction
}
