import { Component, OnInit } from '@angular/core';
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  messages: any[] = [];
  constructor() {
    socket.on("connection", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx

    });
    socket.on("message", (msg) => {
      console.log(msg)
    })
  }

  ngOnInit(): void {
  }

  sendMessage() {
    socket.emit("message", "Hello")
  }
  
  updateTextMessage(event: any) {
  }
}