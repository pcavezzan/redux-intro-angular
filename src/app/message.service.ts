import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class MessageService {
  private messageApiUrl = '/api/messages';

  private messagesSubject: Subject<Message[]> = new Subject<Message[]>();
  messages$: Observable<Message[]> = this.messagesSubject.asObservable();
  messagesCount$: Observable<number> = this.messagesSubject.pipe(map((messages) => messages.length));

  constructor(private httpClient: HttpClient) {
  }

  findAll(): void {
    this.httpClient.get<Message[]>(this.messageApiUrl).subscribe(
      messages => this.messagesSubject.next(messages)
    );
  }

  create(message: Message): Observable<Message> {
    const messageCreated: Subject<Message> = new Subject<Message>();
    this.httpClient.post<Message>(this.messageApiUrl, message).subscribe((message) => {
      messageCreated.next(message);
      this.findAll();
    });
    return messageCreated.asObservable();
  }
}
