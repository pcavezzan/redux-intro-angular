import {Injectable} from "@angular/core";
import {Store} from "./store";
import {filter, map, merge, Observable, switchMap, zip} from "rxjs";
import {
  Action,
  ActionTypes,
  CreateNewMessageAction,
  CreateNewMessageSuccessAction,
  LoadMessageAction,
  LoadMessageSuccessAction
} from "./actions";
import {MessageService} from "./message.service";

@Injectable({providedIn: 'root'})
export class Effects {


  constructor(private store$: Store, private messageService: MessageService) {
  }

  sideEffects = (action$: Observable<Action>): Observable<Action> =>
    zip(
      action$,
      merge(
        this.loadMessage$(action$),
        this.createNewMessage$(action$),
        this.createNewMessageSuccess$(action$)
      )
    ).pipe(
      filter(([initialAction, sideEffectAction]) => initialAction.type !== sideEffectAction.type),
      map(([_, sideEffectAction]) => sideEffectAction),
    );


  loadMessage$ = (action$: Observable<Action>): Observable<Action> => action$.pipe(
    filter(action => action.type === ActionTypes.LOAD_MESSAGES),
    switchMap(() => this.messageService.findAll()),
    map(messages => new LoadMessageSuccessAction(messages))
  );


  createNewMessage$ = (action$: Observable<Action>): Observable<Action> => action$.pipe(
    filter(action => action.type === ActionTypes.CREATE_MESSAGE),
    map(action => action as CreateNewMessageAction),
    switchMap(action => this.messageService.create(action.payload)),
    map(_ => new CreateNewMessageSuccessAction())
  );

  createNewMessageSuccess$ = (action$: Observable<Action>): Observable<Action> => action$.pipe(
    filter(action => action.type === ActionTypes.CREATE_MESSAGE_SUCCESS),
    map(() => new LoadMessageAction())
  );
}


export const bindEffectToStoreAppFactory = (store: Store, effects: Effects): () => Promise<any> => {
  return () => {
    effects.sideEffects(store.actions$)
      .subscribe((action) => {
        console.debug(action);
        store.dispatch(action);
      });
    return Promise.resolve();
  };
}
