export interface IAccount {
  address: string
  network: string
}

export type GetAccountsFunction = (
  networks?: string[]
) => Promise<IAccount[] | undefined>
