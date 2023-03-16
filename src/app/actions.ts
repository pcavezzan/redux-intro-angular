export interface Action {
  type: string
}

export const ActionTypes = {
  LOAD_MESSAGES: '[Global] load messages',
  LOAD_MESSAGES_SUCCESS: '[Global] messages loaded',
  CREATE_MESSAGE: '[Message] create new message',
  CREATE_MESSAGE_SUCCESS: '[Message] create new message success',
};

export class LoadMessageSuccessAction implements Action {
  readonly type: string = ActionTypes.LOAD_MESSAGES_SUCCESS;

  constructor(public payload: Message[]) {
  }
}

export class LoadMessageAction implements Action {
  readonly type: string = ActionTypes.LOAD_MESSAGES;
}

export class CreateNewMessageAction implements Action {
  readonly type: string = ActionTypes.CREATE_MESSAGE;

  constructor(public payload: Message) {
  }
}

export class CreateNewMessageSuccessAction implements Action {
  readonly type: string = ActionTypes.CREATE_MESSAGE_SUCCESS;
}
