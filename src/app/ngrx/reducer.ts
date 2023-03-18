import {createReducer, on} from "@ngrx/store";
import {initialAppState} from "./state";
import * as MessagesActions from './actions';


export const appReducer = createReducer(
  initialAppState,
  on(MessagesActions.loadMessageSuccessAction, (state, { messages }) => ({ ...state, messages } )),
);
