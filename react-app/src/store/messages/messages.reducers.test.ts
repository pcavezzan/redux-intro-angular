import { initialState } from './messages.state';
import { messagesReducer } from './messages.reducers';
import { loadMessagesSuccessAction } from './messages.actions';

describe('MessagesReducers', () => {
  test('should set messages on load messages success action', () => {
    const state = {
      ...initialState
    };
    const messages = [{id: 1, content: 'Test'}];
    const action = loadMessagesSuccessAction(messages);

    const newState = messagesReducer(state, action);

    expect(newState).toEqual({
      ...initialState,
      messages
    });
  });
});