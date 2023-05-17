import { loadMessagesAction, loadMessagesSuccessAction } from './messages.actions';
import * as httpApiService from '../../http-api.service';
import { of, Subject } from 'rxjs';
import { StateObservable } from 'redux-observable';
import { RootState } from '../store';
import { messagesEpics } from './messages.epics';

describe('messagesEpics', () => {

  const initialState: RootState = {messages: {messages: []}};
  const state$ = new StateObservable(new Subject<RootState>(), initialState);

  test('should dispatch load messages success action on load messages action', async () => {
    const messages = [{id: 1, content: 'content'}];
    jest.spyOn(httpApiService, 'findAllMessages').mockResolvedValue(messages);
    const actions$ = of(loadMessagesAction());

    const expectedActions$ = messagesEpics(actions$, state$, null);

    const result = await expectedActions$.toPromise();
    expect(result).toEqual(loadMessagesSuccessAction(messages));
  });
});