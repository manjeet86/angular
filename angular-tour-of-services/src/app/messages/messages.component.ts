import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Inject a public object from MessageService Class to use in Message Component Template.
  constructor(public messageService: MessageService) { }
  
  ngOnInit() {
  }

}
