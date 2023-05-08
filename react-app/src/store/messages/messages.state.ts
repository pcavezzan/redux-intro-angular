import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export interface MessagesState {
  messages: Message[];
}

export const initialState: MessagesState = {
  messages: []
};

const selectMessagesState = (state: RootState) => state.messages;
export const selectMessages = createSelector(
  selectMessagesState,
  (state) => state.messages
);
export const selectMessageCount = createSelector(
  selectMessages,
  (messages) => messages.length
);
