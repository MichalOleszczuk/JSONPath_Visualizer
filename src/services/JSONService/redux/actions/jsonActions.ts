import { CreateActionWithPayload } from '../../../CreateAction';
import { ISetJsonAction, ISetJsonFailedAction, ISetJsonStartAction } from './IJSONActions';
import { JSON_ACTION_TYPES } from './jsonActionTypes';

export const setJsonStartAction = CreateActionWithPayload<ISetJsonStartAction>(JSON_ACTION_TYPES.SET_JSON_START);
export const setJsonDoneAction = CreateActionWithPayload<ISetJsonAction>(JSON_ACTION_TYPES.SET_JSON_DONE);
export const setJsonSuccessAction = CreateActionWithPayload<ISetJsonAction>(JSON_ACTION_TYPES.SET_JSON_SUCCESS);
export const setJsonFailedAction = CreateActionWithPayload<ISetJsonFailedAction>(JSON_ACTION_TYPES.SET_JSON_FAILED);
