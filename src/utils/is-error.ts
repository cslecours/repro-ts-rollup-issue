import { AnError } from "../types"
import { ErrorAction } from "../state"
import { Action } from "../state"

export const isError = <E extends AnError = AnError, T extends string = string>(
    action: Action<any | E, T>,
  ): action is ErrorAction<E, T> => !!action.error
  