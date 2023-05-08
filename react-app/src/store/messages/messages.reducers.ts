import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './messages.state';
import { loadMessagesSuccessAction } from './messages.actions';

export const messagesReducer = createReducer(
  initialState,
  (builder) =>
    builder
      .addCase(loadMessagesSuccessAction, (state, action) => {
        state.messages = action.payload;
      })
);