import { Action, Dispatch, Middleware, MiddlewareAPI } from 'redux';
import {
  CREATE_MESSAGE,
  CREATE_MESSAGE_SUCCESS,
  CreateNewMessageAction,
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LoadMessageSuccessAction,
  MessageAction
} from './actions';
import { createMessage, findAllMessages } from '../http-api.service';

export const messageApiMiddleware: Middleware<MiddlewareAPI, MessageAction, Dispatch<Action>> = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
  const nextAction = next(action);
  switch (action.type) {
    case LOAD_MESSAGES:
      findAllMessages()
        .then((messages: Message[]): LoadMessageSuccessAction => ({
          type: LOAD_MESSAGES_SUCCESS,
          payload: messages
        }))
        .then(action => store.dispatch(action));
      break;
    case CREATE_MESSAGE:
      createMessage((action as CreateNewMessageAction).payload)
        .then(() => store.dispatch(({ type: CREATE_MESSAGE_SUCCESS })));
      break;
    case CREATE_MESSAGE_SUCCESS:
      store.dispatch({type: LOAD_MESSAGES});
      break;
    default:
      break;
  }
  return nextAction;
};

export const messagesMiddlewares: Middleware[] = [messageApiMiddleware];
