import { ActionReducerMap } from '@ngrx/store';
import {AUTH_FEATURE_KEY} from "./user";
import * as fromAuth from './user';

export interface State {
  [AUTH_FEATURE_KEY]: fromAuth.AuthState;
}

export const appReducer: ActionReducerMap<State> = {
  [AUTH_FEATURE_KEY]: fromAuth.reducer,
};
