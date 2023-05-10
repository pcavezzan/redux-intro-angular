import { cold, hot } from 'jest-marbles';
import { loadMessagesAction, loadMessagesSuccessAction } from './messages.actions';
import * as httpApiService from '../../http-api.service';
import { messagesEpics } from './messages.epics';
import { Subject } from 'rxjs';
import { StateObservable } from 'redux-observable';
import { RootState } from '../store';

describe('messagesEpics', () => {

  const initialState: RootState = {messages: {messages: []}};
  const state$ = new StateObservable(new Subject<RootState>(), initialState);

  test('should dispatch load messages success action on load messages action', () => {
    // const actions = cold('--a', {a: loadMessagesAction()});
    const messages = [{id: 1, content: 'content'}];
    jest.spyOn(httpApiService, 'findAllMessages').mockResolvedValue(messages);
    const actions$ = hot('--a', {a: loadMessagesAction()});

    const expectedActions$ = messagesEpics(actions$, state$, null);

    expect(expectedActions$).toBeObservable(cold('--b', {b: loadMessagesSuccessAction(messages)}));
  });
});