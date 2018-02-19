import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  messages: string[] = [];

  addMessage(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
