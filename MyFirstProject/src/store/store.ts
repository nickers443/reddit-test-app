import { Action, ActionCreator, Reducer } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {
  MeRequestAction,
  MeRequestErrorAction,
  MeRequestSuccesAction,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCES,
} from './me/actions'
import { meReducer, MeState } from './me/reducer'

export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const SET_TOKEN = 'SET_TOKEN'

type updateCommentAction = {
  type: typeof UPDATE_COMMENT
  text: string
}

type setTokenAction = {
  type: typeof SET_TOKEN
  token: string
}

type MyAction =
  | updateCommentAction
  | setTokenAction
  | MeRequestAction
  | MeRequestSuccesAction
  | MeRequestErrorAction

export type RootState = {
  commentText: string
  token: string
  me: MeState
}

const initialState: RootState = {
  commentText: 'Уважаемый, ',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
}

export const updateComment: ActionCreator<updateCommentAction> = (text: string) => ({
  type: 'UPDATE_COMMENT',
  text,
})

export const setToken: ActionCreator<setTokenAction> = (token: string) => ({
  type: 'SET_TOKEN',
  token,
})

export const saveToken =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    if (window.__token__ && window.__token__ !== 'undefined') {
      dispatch(setToken(window.__token__))
    }
  }

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case ME_REQUEST:
    case ME_REQUEST_ERROR:
    case ME_REQUEST_SUCCES:
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    default:
      return state
  }
}
