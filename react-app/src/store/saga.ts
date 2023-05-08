// notice how we now only export the rootSaga

import { all } from 'redux-saga/effects';
import { messagesSaga } from './messages/messages.saga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    messagesSaga()
  ]);
}