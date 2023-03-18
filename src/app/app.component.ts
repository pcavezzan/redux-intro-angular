import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadMessageAction} from "./ngrx/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadMessageAction());
  }

}
