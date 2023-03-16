import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, distinctUntilChanged, map, Observable} from "rxjs";
import {AppState, initialAppState} from "./state";

// AKA: mélange d'un store et side effects
@Injectable({providedIn: 'root'})
export class MessageService {
  private messageApiUrl = '/api/messages';

  constructor(private httpClient: HttpClient) {
  }

  // AKA: selectors
  get state$(): Observable<AppState> {
    return this._state.asObservable();
  }

  // AKA: state
  private _state: BehaviorSubject<AppState> = new BehaviorSubject<AppState>(initialAppState);

  private get state(): AppState {
    return this._state.getValue();
  }

  select<K>(selector: (state: AppState) => K): Observable<K> {
    return this.state$.pipe(map(selector), distinctUntilChanged());
  }

  private setState<K extends keyof AppState, E extends Partial<Pick<AppState, K>>>(fn: (state: AppState) => E): void {
    const state = fn(this.state);
    this._state.next({...this.state, ...state});
  }


  // AKA: actions
  findAll(): void {
    // AKA: side effects
    this.httpClient.get<Message[]>(this.messageApiUrl).subscribe(messages => {
      // AKA: actions
      this.onReceiveMessagesSuccess(messages)
    });
  }

  // AKA: actions
  create(message: Message): void {
    // AKA: side effects
    this.httpClient.post<Message>(this.messageApiUrl, message).subscribe((_) => {
      // AKA: actions
      this.findAll();
    });
  }

  // AKA: actions
  private onReceiveMessagesSuccess(messages: Message[]) {
    // AKA: setState <=> reducer
    this.setState((state) => ({messages: messages}))
  }
}
