import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 name = 'Global Dev rtergt edg f';
  isavailable = false;
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  colors = ['green','blue','yellow','black'];
  selectedColor = "green"
  i = 0;
  constructor() { }

  ngOnInit() {
  }
  clickme(event) {
   console.log(event);
  }
  changemonth(e) {
    console.log(e)
  }
  changeColor() {

  }
}