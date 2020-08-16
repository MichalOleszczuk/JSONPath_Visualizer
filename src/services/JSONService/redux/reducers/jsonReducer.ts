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
    case JSON_ACTION_TYPES.SET_JSON_START: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case JSON_ACTION_TYPES.SET_JSON_SUCCESS: {
      return {
        ...state,
        json: action.payload.json,
        inProgress: false,
        error: '',
      };
    }
    case JSON_ACTION_TYPES.SET_JSON_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        inProgress: false,
      };
    }
    default: {
      return state;
    }
  }
};
