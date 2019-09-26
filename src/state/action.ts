export interface Action<P, T extends string = string> {
    readonly type: T
    readonly payload?: P
    readonly error?: boolean
  }
  