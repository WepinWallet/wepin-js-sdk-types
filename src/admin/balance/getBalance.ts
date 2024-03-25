import { IAccount } from '../../account/GetAccountsFunction'

export interface IAccountBalance {
  symbol: string
  balance: string
  tokens: ITokenBalance[]
}

export interface ITokenBalance {
  contract: string
  symbol: string
  balance: string
}

export type GetBalanceFunction = (account: IAccount) => IAccountBalance
