import { IActionPayload } from '../../../CreateAction';
import { ISetJsonAction } from './jsonActions';
import { JSON_ACTION_TYPES } from './jsonActionTypes';

export type IJSONActions = IActionPayload<ISetJsonAction, JSON_ACTION_TYPES.SET_JSON>;
