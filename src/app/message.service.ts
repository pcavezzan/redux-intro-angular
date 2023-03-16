import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


// AKA: mélange d'un store et side effects
@Injectable({providedIn: 'root'})
export class MessageService {
  private messageApiUrl = '/api/messages';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Message[]> {
    // AKA: side effects
    return this.httpClient.get<Message[]>(this.messageApiUrl);
  }

  // AKA: actions
  create(message: Message): Observable<Message> {
    // AKA: side effects
    return this.httpClient.post<Message>(this.messageApiUrl, message);
  }

}
