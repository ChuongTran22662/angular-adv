import {createAction, props} from '@ngrx/store';

export enum EUserActions {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login__SUCCESS',
  LOGIN_FAIL = '[Auth] Login__FAILURE'
}

export const login = createAction(
  EUserActions.LOGIN,
  props<{ payload: any }>());

export const loginSuccess = createAction(
  EUserActions.LOGIN_SUCCESS,
  props<{ response: any }>());

export const loginFailure = createAction(
  EUserActions.LOGIN_FAIL,
  props<{ error: Error }>());
