import * as fromLogin from './login/login.reducer';
import * as fromBugs from './bugs/bugs.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { createSelector } from 'reselect';

export interface State {
  login: fromLogin.State;
  bugs: fromBugs.State;
}

export const reducers: ActionReducerMap<State> = {
  login: fromLogin.reducer,
  bugs: fromBugs.reducer
};

const getLoginState = (state: State) => state.login;
export const getLoginUser = createSelector(getLoginState, fromLogin.getLoginUser);
export const getLoginFlag = createSelector(getLoginState, fromLogin.getLoginFlag);

const getBugsState = (state: State) => state.bugs;
export const getBugsData = createSelector(getBugsState, fromBugs.getPopulation);
