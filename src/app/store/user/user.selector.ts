import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./user.state";
import {AUTH_FEATURE_KEY} from "./user.reducer";

const selectAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectToken = createSelector(selectAuthState, state => state.token);

export const selectLoading = createSelector(selectAuthState, state => state.loading);

export const selectUser = createSelector(selectAuthState, state => state.user);

export const selectIsLogined = createSelector(
  selectToken,
  selectLoading,
  (token, loading) => !!token && !loading,
)
