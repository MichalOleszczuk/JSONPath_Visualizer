import { combineReducers } from 'redux';
import { jsonReducer } from '../services/JSONService/redux/reducers/jsonReducer';

export const rootReducer = combineReducers({
  json: jsonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
