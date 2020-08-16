import { IJSONActions } from '../actions/IJSONActions';
import { JSON_ACTION_TYPES } from '../actions/jsonActionTypes';

export interface IJSONReducer {
  error: string;
  json: Object | Array<any>;
  defaultJson: Object | Array<any>;
  inProgress: boolean;
  fileLoadInProgress: boolean;
}

export const JSON_REDUCER_DEFAULT_STATE = {
  error: '',
  json: {},
  defaultJson: {},
  inProgress: false,
  fileLoadInProgress: false,
};

export const jsonReducer = (state: IJSONReducer = JSON_REDUCER_DEFAULT_STATE, action: IJSONActions) => {
  switch (action.type) {
    case JSON_ACTION_TYPES.SET_DEFAULT_JSON: {
      return {
        ...JSON_REDUCER_DEFAULT_STATE,
        fileLoadInProgress: true,
      };
    }
    case JSON_ACTION_TYPES.SET_DEFAULT_JSON_SUCCESS: {
      return {
        ...state,
        defaultJson: action.payload.json,
        fileLoadInProgress: false,
      };
    }
    case JSON_ACTION_TYPES.SET_DEFAULT_JSON_FAILED: {
      return {
        ...state,
        fileLoadInProgress: false,
      };
    }
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
