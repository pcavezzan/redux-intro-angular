import { expectSaga } from 'redux-saga-test-plan';
import * as messageApi from '../../http-api.service';
import { messagesSaga } from './messages.saga';
import { call } from 'redux-saga/effects';
import { loadMessagesAction, loadMessagesSuccessAction } from './messages.actions';

describe('messages saga', () => {
  const messages: Message[] = [{id: 1, content: 'Message'}];
  jest.spyOn(messageApi, 'findAllMessages').mockResolvedValue(messages);

  test('should call find all messages on loadMessagesAction', () =>
    expectSaga(messagesSaga)
      .provide([[call(messageApi.findAllMessages), messages]])
      .put(loadMessagesSuccessAction(messages))
      .dispatch(loadMessagesAction())
      .silentRun());


  test('should create message on createMessageAction', () =>
    expectSaga(messagesSaga)
      .provide([[call(messageApi.findAllMessages), messages]])
      .put(loadMessagesSuccessAction(messages))
      .dispatch(loadMessagesAction())
      .silentRun());

});