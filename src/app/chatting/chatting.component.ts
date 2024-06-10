import { Component, OnInit } from '@angular/core';

interface Message {
  sender: string;
  content: string;
}

@Component({
  selector: 'app-chatting', // Updated component selector
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css'],
})
export class ChattingComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';

  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    if (this.newMessage.trim()) {
      // Check if message is not empty
      this.messages.push({ sender: 'You', content: this.newMessage });
      this.newMessage = ''; // Clear the input field
    }
  }
}
