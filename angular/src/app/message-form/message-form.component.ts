import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {

  messageForm = this.fb.group({
    content: ['', Validators.required]
  });

  @Output()
  submitMessage: EventEmitter<Message> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  onSubmitMessageForm() {
    if (this.messageForm.valid) {
      this.submitMessage.emit({
        content: this.messageForm.value.content!!
      });
    }
  }
}
