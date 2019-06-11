import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../Services/users.service'
import {trigger,transition,style,animate} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsersService],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({backgroundColor:'yellow',opacity:0}),
        animate(2000,style({backgroundColor:'white',opacity:1}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
 name = 'Global Dev rtergt edg f';
  users;
  constructor(usersService: UsersService) {
    this.users = usersService.getAllUsers();
  }

  ngOnInit() {
  }
 
}