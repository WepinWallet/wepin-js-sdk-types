import { IAccount } from "../account"

export interface ISendOptions {
  toAddress: string
  amount: string
}

export type SendFunction = (
  account: IAccount,
  options?: ISendOptions
) => Promise<string | undefined>
