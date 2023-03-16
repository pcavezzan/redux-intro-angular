import {AppState} from "./state";
import {Action, ActionTypes, LoadMessageSuccessAction} from "./actions";

export const reduce = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ActionTypes.LOAD_MESSAGES_SUCCESS:
      const loadMessageSuccessAction = action as LoadMessageSuccessAction;
      return {
        ...state,
        messages: loadMessageSuccessAction.payload
      };
    default:
      return state;
  }
}
