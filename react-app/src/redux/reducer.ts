import { AppState, initialAppState } from './state';
import { LOAD_MESSAGES_SUCCESS, MessageAction } from './actions';

export const messagesReducer = (state: AppState = initialAppState, action: MessageAction): AppState => {
  switch (action.type) {
    case LOAD_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
}
