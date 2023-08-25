export interface IStatus {
  login: boolean
  loginStatus?: 'completed' | 'registerRequired'
}

export type GetStatusFunction = (option?: {
  waitForClose: boolean
}) => Promise<IStatus | undefined>
