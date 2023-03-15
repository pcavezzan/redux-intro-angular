import {Injectable} from '@angular/core';
import {InMemoryDbService, RequestInfo} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class InMemoryMessageDataServerService implements InMemoryDbService {

  constructor() {
  }

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const messages: Message[] = [
      {id: 1, content: 'Contenu 1'},
      {id: 2, content: 'Contenu 2'}
    ];
    return {messages};
  }
}
