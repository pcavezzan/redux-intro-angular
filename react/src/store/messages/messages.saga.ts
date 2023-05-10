import { call, put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import { createMessage, findAllMessages } from '../../http-api.service';
import { createMessageAction, loadMessagesAction, loadMessagesSuccessAction } from './messages.actions';
import { PayloadAction } from '@reduxjs/toolkit/src/createAction';

function* loadMessageEffect() {
  const messages: Message[] = yield call(findAllMessages);
  yield put(loadMessagesSuccessAction(messages));
}

function* createMessageEffect(action: PayloadAction<Message>) {
  yield call(createMessage, action.payload);
  yield put(loadMessagesAction());
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export function* messagesSaga() {
  yield takeEvery(loadMessagesAction.type, loadMessageEffect);
  yield takeEvery(createMessageAction.type, createMessageEffect);
}
