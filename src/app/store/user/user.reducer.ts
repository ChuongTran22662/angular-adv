import {Action, createReducer, on} from "@ngrx/store";
import {login, loginFailure, loginSuccess} from "./user.actions";

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  token: string;
  user: any;
  loading: boolean;
  errors: string;
}

const initialState: AuthState = {
  token: '',
  user: null,
  loading: false,
  errors: ''
};

const _authReducer = createReducer(
  initialState,
  on(login, state => ({...state, loading: true})),
  on(loginSuccess, (state, {response}) => {
    return ({
      ...state,
      loading: false,
      token: response.token,
      user: response
    })
  }),
  on(loginFailure, state => ({...state, loading: false})),
)

export function reducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
