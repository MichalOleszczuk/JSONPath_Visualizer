import { put, take, delay, takeLatest } from 'redux-saga/effects';
// Import your worker
import worker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax
import { store } from '../../../../config/store';
import { IActionPayload } from '../../../CreateAction';
import { ISetJsonAction, ISetJsonStartAction } from '../actions/IJSONActions';
import { setJsonDoneAction, setJsonFailedAction, setJsonSuccessAction } from '../actions/jsonActions';
import { JSON_ACTION_TYPES } from '../actions/jsonActionTypes';

// Create an instance of your worker
const workerInstance = worker();

export function* prepareNewJsonSaga({ payload }: IActionPayload<ISetJsonStartAction>) {
  const callback = (json: any) => {
    store.dispatch(setJsonDoneAction({ json }) as any);
  };

  const onWorkerMessage = (message: any) => {
    console.log('New Message: ', message.data);
    if (message.data.type === 'prepareNewJson') {
      callback(message.data.payload);
    }
  };

  try {
    const { eventValue, currentJson, previousJsonQuery } = payload;

    // Attach an event listener to receive json from your worker
    workerInstance.addEventListener('message', onWorkerMessage);

    // Run your worker
    workerInstance.prepareNewJson({ eventValue, currentJson, previousJsonQuery });

    const doneAction = (yield take(JSON_ACTION_TYPES.SET_JSON_DONE)) as IActionPayload<ISetJsonAction>;
    yield delay(2000);
    yield put(setJsonSuccessAction({ json: doneAction.payload.json }));
    workerInstance.removeEventListener('message', onWorkerMessage);
  } catch (error) {
    console.error(error);
    yield put(setJsonFailedAction(error.message));
    workerInstance.removeEventListener('message', onWorkerMessage);
  }
}

export function* watchJsonEvents() {
  yield takeLatest(JSON_ACTION_TYPES.SET_JSON_START, prepareNewJsonSaga);
}
