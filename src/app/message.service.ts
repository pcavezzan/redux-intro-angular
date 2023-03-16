import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, Subject} from "rxjs";

// AKA: mélange d'un store et side effects
@Injectable({providedIn: 'root'})
export class MessageService {
  private messageApiUrl = '/api/messages';

  // AKA: state
  private messagesSubject: Subject<Message[]> = new Subject<Message[]>();

  // AKA: selectors
  messages$: Observable<Message[]> = this.messagesSubject.asObservable();
  messagesCount$: Observable<number> = this.messagesSubject.pipe(map((messages) => messages.length));

  constructor(private httpClient: HttpClient) {
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
    this.messagesSubject.next(messages);
  }
}
