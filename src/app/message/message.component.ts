import { Component, Input } from '@angular/core';

interface Message {
  sender: string;
  content: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  @Input()
  message!: Message;

  constructor() {}
}
