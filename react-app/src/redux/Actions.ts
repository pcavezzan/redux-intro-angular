export const LOAD_MESSAGES = '[Global] load messages';
export const LOAD_MESSAGES_SUCCESS = '[Global] messages loaded';
export const CREATE_MESSAGE = '[Message] create new message';
export const CREATE_MESSAGE_SUCCESS = '[Message] create new message success';

export interface LoadMessageSuccessAction {
  readonly type: typeof LOAD_MESSAGES_SUCCESS;
  readonly payload: Message[];
}

export interface LoadMessageAction {
  readonly type: typeof LOAD_MESSAGES;
}

export interface CreateNewMessageAction {
  readonly type: typeof CREATE_MESSAGE;
  readonly payload: Message;
}

export interface CreateNewMessageSuccessAction {
  readonly type: typeof CREATE_MESSAGE_SUCCESS;
}

export type MessageAction =
  LoadMessageAction
  | LoadMessageSuccessAction
  | CreateNewMessageAction
  | CreateNewMessageSuccessAction;
