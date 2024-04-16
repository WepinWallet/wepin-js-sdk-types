export interface IAccount {
  address: string
  network: string
  contract?: string
}

export type GetAccountsFunction = (
  networks?: string[]
) => Promise<IAccount[] | undefined>
