import { InitFunction } from '../init/InitFunction'
import { GetAccountsFunction } from '../account/GetAccountsFunction'

export interface IWepin {
  init: InitFunction
  isInitialized: () => boolean
  openWidget: () => Promise<void>
  closeWidget: () => void
  getAccounts: GetAccountsFunction
}
