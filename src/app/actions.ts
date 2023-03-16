export interface Action {
  type: string
}

export const ActionTypes = {
  LOAD_MESSAGES_SUCCESS: '[Global] messages loaded'
};

export class LoadMessageSuccessAction implements Action {
  type: string = ActionTypes.LOAD_MESSAGES_SUCCESS;

  constructor(public payload: Message[]) {
  }
}
