import { AppState, initialAppState } from "./State";
import { LOAD_MESSAGES_SUCCESS, MessageAction } from "./Actions";

export const reduce = (state: AppState = initialAppState, action: MessageAction): AppState => {
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
