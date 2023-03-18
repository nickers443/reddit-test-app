import axios from 'axios'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'

export interface IUserData {
  name?: string
  iconImg?: string
}

export const ME_REQUEST = 'ME_REQUEST'
export const ME_REQUEST_SUCCES = 'ME_REQUEST_SUCCES'
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR'

export type MeRequestAction = {
  type: typeof ME_REQUEST
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST,
})

export type MeRequestSuccesAction = {
  type: typeof ME_REQUEST_SUCCES
  data: IUserData
}

export const meRequestSucces: ActionCreator<MeRequestSuccesAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCES,
  data,
})

export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR
  error: string
}

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error,
})

export const meRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meRequest())
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: {
          Authorization: `bearer ${getState().token}`,
        },
      })
      .then((resp) => {
        const userData = resp.data
        const myUserData = { name: userData.name, iconImg: userData.icon_img }
        dispatch(meRequestSucces(myUserData))
      })
      .catch((error) => {
        dispatch(meRequestError(String(error)))
      })
  }
