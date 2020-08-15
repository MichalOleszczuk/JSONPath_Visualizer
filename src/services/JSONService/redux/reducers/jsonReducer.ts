import { IJSONActions } from '../actions/IJSONActions';
import { JSON_ACTION_TYPES } from '../actions/jsonActionTypes';

export interface IJSONReducer {
  error: string;
  json: Object | Array<any>;
  inProgress: boolean;
}

export const RESOURCES_LIST_DEFAULT_STATE = {
  error: '',
  json: {},
  inProgress: false,
};

export const jsonReducer = (state: IJSONReducer = RESOURCES_LIST_DEFAULT_STATE, action: IJSONActions) => {
  switch (action.type) {
    case JSON_ACTION_TYPES.SET_JSON: {
      return {
        ...state,
        json: action.payload.json,
      };
    }
    default: {
      return state;
    }
  }
};
