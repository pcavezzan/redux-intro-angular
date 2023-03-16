import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoadMessageSuccessAction} from "./actions";
import {Store} from "./store";


// AKA: mélange d'un store et side effects
@Injectable({providedIn: 'root'})
export class MessageService {
  private messageApiUrl = '/api/messages';

  constructor(private store: Store, private httpClient: HttpClient) {
  }

  findAll(): void {
    // AKA: side effects
    this.httpClient.get<Message[]>(this.messageApiUrl).subscribe(messages => {
      // AKA: actions
      this.store.dispatch(new LoadMessageSuccessAction(messages));
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

}
