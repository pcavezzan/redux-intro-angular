import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {createMessageAction} from "../ngrx/actions";

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent {

  constructor(private store: Store) {
  }

  onSubmitMessage(message: Message) {
    this.store.dispatch(createMessageAction({ message }));
  }
}
