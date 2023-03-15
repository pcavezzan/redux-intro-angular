import {Component, EventEmitter, Output} from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent {

  @Output()
  messageCreated: EventEmitter<Message> = new EventEmitter<Message>();

  constructor(private messageService: MessageService) {
  }

  onSubmitMessage(message: Message) {
    this.messageService.create(message).subscribe((message) => {
      this.messageCreated.emit(message)
    });
  }
}
