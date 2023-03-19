import { Component, OnInit } from '@angular/core';
import {RxjsService} from "../rxjs.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public messages: string[] = [];

  constructor(private rxjsService: RxjsService) {}

  ngOnInit() {
    this.rxjsService.messages$.subscribe((messages) => {
      this.messages = messages;
    });
  }

  public sendMessage(message: string) {
    this.rxjsService.addMessage(message);
  }
}
