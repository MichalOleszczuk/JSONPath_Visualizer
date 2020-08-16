import { all } from 'redux-saga/effects';
import { watchJsonEvents } from '../services/JSONService/redux/saga/jsonSaga';

export function* rootSaga() {
  yield all([watchJsonEvents()]);
}
