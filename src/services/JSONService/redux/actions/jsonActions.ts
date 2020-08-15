import { CreateActionWithPayload } from '../../../CreateAction';
import { JSON_ACTION_TYPES } from './jsonActionTypes';

export interface ISetJsonAction {
  json: any;
}

export const setJsonAction = CreateActionWithPayload<ISetJsonAction>(JSON_ACTION_TYPES.SET_JSON);
