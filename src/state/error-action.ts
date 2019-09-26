import { AnError } from '../types'
import { Action } from './action';

export interface ErrorAction<E extends AnError = AnError, T extends string = string> extends Action<E, T> {
  error: true
}
