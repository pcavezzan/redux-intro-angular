import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {MessageService} from "../message.service";
import {selectMessageCount} from "../state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  messageCount$: Observable<number> = EMPTY;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageCount$ = this.messageService.select(selectMessageCount);
  }

}
