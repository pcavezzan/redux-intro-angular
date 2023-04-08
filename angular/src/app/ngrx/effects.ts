import {Injectable} from "@angular/core";
import {MessageService} from "../message.service";
import {map, Observable, switchMap, tap} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {createMessageAction, createMessageSuccessAction, loadMessageAction, loadMessageSuccessAction} from "./actions";

@Injectable()
export class Effects {

  loadMessages$: Observable<Action> = createEffect(() => this.actions$.pipe(
    tap((action) => console.log(action)),
    ofType(loadMessageAction.type),
    switchMap(() => this.messagesService.findAll()),
    map((messages) => loadMessageSuccessAction({messages}))
  ));

  createMessages$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(createMessageAction.type),
    switchMap(({message}) => this.messagesService.create(message)),
    map(() => createMessageSuccessAction())
  ));

  createMessageSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(createMessageSuccessAction.type),
    map(() => loadMessageAction())
  ));

  constructor(
    private actions$: Actions,
    private messagesService: MessageService
  ) {
  }

}
