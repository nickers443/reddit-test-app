import { Reducer } from 'redux'
import {
  IUserData,
  MeRequestAction,
  MeRequestErrorAction,
  MeRequestSuccesAction,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCES,
} from './actions'

export type MeState = {
  loading: boolean
  error: string
  data: IUserData
}

type MeAction = MeRequestAction | MeRequestSuccesAction | MeRequestErrorAction

export const meReducer: Reducer<MeState, MeAction> = (state: any, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case ME_REQUEST_SUCCES:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    default:
      return {
        ...state,
        loading: false,
      }
  }
}
