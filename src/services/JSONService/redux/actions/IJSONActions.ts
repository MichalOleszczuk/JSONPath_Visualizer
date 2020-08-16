import { IActionPayload } from '../../../CreateAction';
import { JSON_ACTION_TYPES } from './jsonActionTypes';

export type IJSONActions =
  | IActionPayload<ISetJsonStartAction, JSON_ACTION_TYPES.SET_JSON_START>
  | IActionPayload<ISetJsonDefaultAction, JSON_ACTION_TYPES.SET_DEFAULT_JSON>
  | IActionPayload<ISetJsonAction, JSON_ACTION_TYPES.SET_DEFAULT_JSON_DONE>
  | IActionPayload<ISetJsonAction, JSON_ACTION_TYPES.SET_DEFAULT_JSON_SUCCESS>
  | IActionPayload<ISetJsonFailedAction, JSON_ACTION_TYPES.SET_DEFAULT_JSON_FAILED>
  | IActionPayload<ISetJsonAction, JSON_ACTION_TYPES.SET_JSON_DONE>
  | IActionPayload<ISetJsonAction, JSON_ACTION_TYPES.SET_JSON_SUCCESS>
  | IActionPayload<ISetJsonFailedAction, JSON_ACTION_TYPES.SET_JSON_FAILED>;

export interface ISetJsonStartAction {
  eventValue: string;
  currentJson: any;
  defaultJson: Object | Array<any>
}

export interface ISetJsonDefaultAction {
  file: any;
}

export interface ISetJsonAction {
  json: any;
}

export interface ISetJsonFailedAction {
  error: string;
}
