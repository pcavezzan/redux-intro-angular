import { configureStore, Store } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpics } from './epics';
import { MessagesState } from './messages/messages.state';
import { MessageActions } from './messages/messages.actions';

export type RootActions = MessageActions;

export interface RootState {
  messages: MessagesState;
}


const epicMiddleware = createEpicMiddleware<RootActions, RootActions, RootState>();

export const store: Store<RootState, RootActions> = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware)
});

epicMiddleware.run(rootEpics);

export type AppDispatch = typeof store.dispatch;