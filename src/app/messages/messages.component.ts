import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  @Input()
  messages: Message[] | undefined | null;

}
