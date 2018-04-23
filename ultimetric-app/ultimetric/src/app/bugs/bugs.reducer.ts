import { BugsActionsService } from './bugs-actions.service';

export interface State {
  data: any;
}

export const initialState: State = {
  data: []
};

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case BugsActionsService.GET_POPULATION:
      return Object.assign({}, state, {data: action.payload});
    default:
      return state;
  }
}

export const getPopulation = (state: State) => state.data;
