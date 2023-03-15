import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class MessageService {
  private messageApiUrl = '/api/messages';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.messageApiUrl);
  }

  create(message: Message): Observable<Message> {
    return this.httpClient.post<Message>(this.messageApiUrl, message);
  }
}
