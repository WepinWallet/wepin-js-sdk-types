export type WepinLifeCycle =
  | 'not_initialized'
  | 'initializing'
  | 'initialized'
  | 'before_login'
  | 'login'

export type GetStatusFunction = () => WepinLifeCycle
