import { CreateActionWithPayload } from '../../../CreateAction';
import { ISetJsonAction, ISetJsonDefaultAction, ISetJsonFailedAction, ISetJsonStartAction } from './IJSONActions';
import { JSON_ACTION_TYPES } from './jsonActionTypes';

export const setJsonStartAction = CreateActionWithPayload<ISetJsonStartAction>(JSON_ACTION_TYPES.SET_JSON_START);
export const setJsonDefaultAction = CreateActionWithPayload<ISetJsonDefaultAction>(JSON_ACTION_TYPES.SET_DEFAULT_JSON);
export const setJsonDefaultDoneAction = CreateActionWithPayload<ISetJsonAction>(JSON_ACTION_TYPES.SET_DEFAULT_JSON_DONE);
export const setJsonDefaultSuccessAction = CreateActionWithPayload<ISetJsonAction>(
  JSON_ACTION_TYPES.SET_DEFAULT_JSON_SUCCESS,
);
export const setJsonDefaultFailedAction = CreateActionWithPayload<ISetJsonAction>(
  JSON_ACTION_TYPES.SET_DEFAULT_JSON_FAILED,
);
export const setJsonDoneAction = CreateActionWithPayload<ISetJsonAction>(JSON_ACTION_TYPES.SET_JSON_DONE);
export const setJsonSuccessAction = CreateActionWithPayload<ISetJsonAction>(JSON_ACTION_TYPES.SET_JSON_SUCCESS);
export const setJsonFailedAction = CreateActionWithPayload<ISetJsonFailedAction>(JSON_ACTION_TYPES.SET_JSON_FAILED);
