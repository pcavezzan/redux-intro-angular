export interface AppState {
  messages: Message[]
}

export const initialAppState: AppState = {
  messages: []
}

export const selectMessages = (appState: AppState): Message[] => appState.messages;
export const selectMessageCount = (appState: AppState): number => appState.messages.length;

