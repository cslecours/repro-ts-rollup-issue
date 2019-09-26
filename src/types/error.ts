export type AnError = Error | AnHttpError

export interface AnHttpError {
  readonly errorCode: string
  readonly message: string
}
