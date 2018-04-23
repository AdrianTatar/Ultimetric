import { LoginActionsService } from './login-actions.service';

export interface State {
  user: any;
  isLogged: boolean;
}

export const initialState: State = {
  user: null,
  isLogged: false
};

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case LoginActionsService.USER_LOGIN:
      console.log('merge', Object.assign({}, state, action.payload));
      console.log('payload', action.payload);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export const getLoginUser = (state: State) => state.user;
export const getLoginFlag = (state: State) => state.isLogged;
