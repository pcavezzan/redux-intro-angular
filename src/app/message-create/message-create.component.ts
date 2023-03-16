import {Component} from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent {

  constructor(private messageService: MessageService) {
  }

  onSubmitMessage(message: Message) {
    this.messageService.create(message);
  }
}
