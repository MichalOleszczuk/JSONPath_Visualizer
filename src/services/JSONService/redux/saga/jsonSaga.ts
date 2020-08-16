import { delay, put, select, take, takeLatest } from 'redux-saga/effects';
// Import your worker
import worker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax
import { store } from '../../../../config/store';
import { IActionPayload } from '../../../CreateAction';
import { ISetJsonAction, ISetJsonDefaultAction, ISetJsonStartAction } from '../actions/IJSONActions';
import {
  setJsonDefaultDoneAction,
  setJsonDefaultFailedAction,
  setJsonDefaultSuccessAction,
  setJsonDoneAction,
  setJsonFailedAction,
  setJsonStartAction,
  setJsonSuccessAction,
} from '../actions/jsonActions';
import { JSON_ACTION_TYPES } from '../actions/jsonActionTypes';
import { jsonSelector } from '../selectors/jsonSelectors';

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
    const { eventValue, currentJson } = payload;
    const { defaultJson } = yield select(jsonSelector);

    // Attach an event listener to receive json from your worker
    workerInstance.addEventListener('message', onWorkerMessage);

    // Run your worker
    workerInstance.prepareNewJson({ eventValue, currentJson, defaultJson });

    const doneAction = (yield take(JSON_ACTION_TYPES.SET_JSON_DONE)) as IActionPayload<ISetJsonAction>;
    // INFO: just to display loader on small files.
    yield delay(2000);
    yield put(setJsonSuccessAction({ json: doneAction.payload.json }));
    workerInstance.removeEventListener('message', onWorkerMessage);
  } catch (error) {
    console.error(error);
    yield put(setJsonFailedAction(error.message));
    workerInstance.removeEventListener('message', onWorkerMessage);
  }
}

export function* loadJsonFileSaga({ payload }: IActionPayload<ISetJsonDefaultAction>) {
  const callback = (json: any) => {
    store.dispatch(setJsonDefaultDoneAction({ json }) as any);
  };

  const onWorkerMessage = (message: any) => {
    console.log('New Message: ', message.data);
    if (message.data.type === 'loadJsonFile') {
      callback(message.data.payload);
    }
  };

  try {
    const { file } = payload;

    // Attach an event listener to receive json from your worker
    workerInstance.addEventListener('message', onWorkerMessage);

    // Run your worker
    workerInstance.loadJsonFile({ file });

    const doneAction = (yield take(JSON_ACTION_TYPES.SET_DEFAULT_JSON_DONE)) as IActionPayload<ISetJsonAction>;
    // INFO: just to display loader on small files.
    yield delay(2000);
    yield put(setJsonDefaultSuccessAction({ json: doneAction.payload.json }));
    yield put(
      setJsonStartAction({
        eventValue: '',
        currentJson: doneAction.payload.json,
        defaultJson: doneAction.payload.json,
      }),
    );
    workerInstance.removeEventListener('message', onWorkerMessage);
  } catch (error) {
    console.error(error);
    yield put(setJsonDefaultFailedAction(error.message));
    workerInstance.removeEventListener('message', onWorkerMessage);
  }
}

export function* watchJsonEvents() {
  yield takeLatest(JSON_ACTION_TYPES.SET_JSON_START, prepareNewJsonSaga);
  yield takeLatest(JSON_ACTION_TYPES.SET_DEFAULT_JSON, loadJsonFileSaga);
}
