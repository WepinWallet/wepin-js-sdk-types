import { AttributesType } from '../types'
export interface IAttributes {
  type: AttributesType
  defaultLanguage: string
  defaultCurrency: string
}

export type InitFunction = (
  appId: string,
  appKey: string,
  attributes?: IAttributes
) => Promise<boolean>
