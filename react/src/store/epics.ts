import { combineEpics } from 'redux-observable';
import { messagesEpics } from './messages/messages.epics';

export const rootEpics = combineEpics(messagesEpics);
