import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectMessageCount} from "../ngrx/state";

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
