import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { RootState } from '../store';
import { createMessageAction, loadMessagesAction, loadMessagesSuccessAction, MessageActions } from './messages.actions';
import { map, Observable, switchMap, tap } from 'rxjs';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { createMessage$, findAllMessages$ } from './messages.epics.adapter';

const loadMessagesEpic = (actions$: Observable<MessageActions>, _: StateObservable<RootState>): Observable<MessageActions> => actions$.pipe(
  ofType(loadMessagesAction.type),
  tap(() => console.log('test')),
  switchMap(() => findAllMessages$()),
  map((messages) => loadMessagesSuccessAction(messages))
);


const createMessagesEpic = (actions$: Observable<MessageActions>, _: StateObservable<RootState>): Observable<MessageActions> => actions$.pipe(
  ofType(createMessageAction.type),
  map(action => action as ReturnType<ActionCreatorWithPayload<Message>>),
  switchMap((action) => createMessage$(action.payload)),
  map(() => loadMessagesAction())
);

export const messagesEpics = combineEpics(
  loadMessagesEpic,
  createMessagesEpic
);
