import {AuthState} from "./user.state";
import {Action, createReducer, on} from "@ngrx/store";
import {login, loginFailure, loginSuccess} from "./user.actions";

export const AUTH_FEATURE_KEY = 'auth';

const initialState: AuthState = {
  token: '',
  loading: false,
  user: null
};

const _authReducer = createReducer(
  initialState,
  on(login, state => ({...state, loading: true, user: null})),
  on(loginSuccess, (state, payload) => ({...state, loading: false, token: payload?.token, user: payload?.user})),
  on(loginFailure, state => ({...state, loading: false})),
)

export function reducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
