import { Action, Dispatch, Middleware, MiddlewareAPI } from "redux";
import { LOAD_MESSAGES, LOAD_MESSAGES_SUCCESS, LoadMessageSuccessAction, MessageAction } from "./Actions";
import { findAllMessages } from "../http-api.service";

export const messageApiMiddleware: Middleware<MiddlewareAPI, MessageAction, Dispatch<Action>> = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
  const nextAction = next(action);
  switch (action.type) {
    case LOAD_MESSAGES:
      findAllMessages()
        .then((messages: Message[]): LoadMessageSuccessAction => ({
          type: LOAD_MESSAGES_SUCCESS,
          payload: messages
        }))
        .then(action => store.dispatch(action))
      break;
    default:
      break;
  }
  return nextAction;
};

export const messagesMiddlewares: Middleware[] = [messageApiMiddleware];
