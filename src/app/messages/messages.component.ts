import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {MessageService} from "../message.service";


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages$: Observable<Message[]> = EMPTY;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messages$ = this.messageService.messages$;
  }

}
