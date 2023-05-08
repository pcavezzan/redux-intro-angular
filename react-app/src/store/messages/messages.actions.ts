import { createAction } from '@reduxjs/toolkit';

export const LOAD_MESSAGES = 'messages/load messages';
export const LOAD_MESSAGES_SUCCESS = 'messages/load messages success';
export const CREATE_MESSAGE = 'messages/create new message';

export const loadMessagesAction = createAction(LOAD_MESSAGES);
export const loadMessagesSuccessAction = createAction<Message[]>(LOAD_MESSAGES_SUCCESS);
export const createMessageAction = createAction<Message>(CREATE_MESSAGE);

