import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [],

})
export class HomeComponent implements OnInit {
loadModal:boolean = true;
  constructor() {
    
  }

  ngOnInit() {
  }
 open():void {
   this.loadModal = true;
 }
 close():void {
   this.loadModal = false;
 }
}