import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectMessages} from "../ngrx/state";


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages$: Observable<Message[]> = EMPTY;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.messages$ = this.store.select(selectMessages);
  }

}
