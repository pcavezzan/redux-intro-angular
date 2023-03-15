import {Component, OnInit} from '@angular/core';
import {MessageService} from "./message.service";
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages$: Observable<Message[]> = EMPTY;
  messageCount$: Observable<number> = EMPTY;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messages$ = this.messageService.messages$;
    this.messageCount$ = this.messageService.messagesCount$;
    this.messageService.findAll();
  }

}
