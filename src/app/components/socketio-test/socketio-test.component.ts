import { Component, OnInit } from '@angular/core';
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-socketio-test',
  templateUrl: './socketio-test.component.html',
  styleUrls: ['./socketio-test.component.scss']
})
export class SocketioTestComponent implements OnInit {
  messages: string[] = [];
  constructor(private socket: Socket) {
    this.socket.fromEvent<string>('message').subscribe(message => {
      this.messages.push(message);
    });
  }

  ngOnInit(): void {
  }

  send() {
    this.socket.emit('message', 'Hello, server!');
  }

}
