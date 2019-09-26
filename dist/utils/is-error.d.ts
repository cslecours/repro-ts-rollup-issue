import { AnError } from "../types";
import { ErrorAction } from "../state";
import { Action } from "../state";
export declare const isError: <E extends AnError = AnError, T extends string = string>(action: Action<any, T>) => action is ErrorAction<E, T>;
