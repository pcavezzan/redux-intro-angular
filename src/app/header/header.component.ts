import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {selectMessageCount} from "../state";
import {Store} from "../store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  messageCount$: Observable<number> = EMPTY;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.messageCount$ = this.store.select(selectMessageCount);
  }

}
