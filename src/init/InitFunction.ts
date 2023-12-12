import { AttributesType, LoginProviders } from '../types'
export interface IAttributes {
  type?: AttributesType
  defaultLanguage?: string
  defaultCurrency?: string
  loginProviders?: Array<LoginProviders>
}

export type InitFunction = (
  appId: string,
  appKey: string,
  attributes?: IAttributes
) => Promise<boolean>
