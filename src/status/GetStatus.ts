export type WepinLifeCycle =
  | 'not_initialized'
  | 'initializing'
  | 'initialized'
  | 'before_login'
  | 'login'
  | 'login_before_register'

export type GetStatusFunction = () => WepinLifeCycle
