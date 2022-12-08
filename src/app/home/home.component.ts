import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages: any[] = [];

  constructor() {
  }


  ngOnInit(): void {
  }

  sendMessage(){

  }

  updateTextMessage(event : any){

  }
}
