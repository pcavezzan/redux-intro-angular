import { loadMessagesAction, loadMessagesSuccessAction } from './messages.actions';
import * as service from './messages.epics.adapter';
import { Subject } from 'rxjs';
import { StateObservable } from 'redux-observable';
import { RootState } from '../store';
import { messagesEpics } from './messages.epics';
import { cold, hot } from 'jest-marbles';

describe('messagesEpics', () => {

  const initialState: RootState = {messages: {messages: []}};
  const state$ = new StateObservable(new Subject<RootState>(), initialState);

  test('should dispatch load messages success action on load messages action', () => {
    const messages = [{id: 1, content: 'content'}];
    jest.spyOn(service, 'findAllMessages$').mockReturnValue(cold('-a', {a: messages}));
    const actions$ = hot('-a', loadMessagesAction());

    const expectedActions$ = messagesEpics(actions$, state$, null);

    expect(expectedActions$).toBeObservable(cold('--r', {r: loadMessagesSuccessAction(messages)}));
  });
});