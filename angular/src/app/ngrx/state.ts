import {createSelector} from "@ngrx/store";

export interface AppState {
  messages: Message[]
}

export const initialAppState: AppState = {
  messages: []
};


export const appState = (state: any) => state.app as AppState;
export const selectMessages = createSelector(appState, (state) => state.messages);
export const selectMessageCount = createSelector(appState, (state) => state.messages.length);
