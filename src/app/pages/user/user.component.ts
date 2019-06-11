import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../Services/users.service'
import {trigger,transition,style,animate} from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService],
  animations:[
    trigger('fade',[
      transition(':enter,:leave',[
        style({backgroundColor:'yellow',opacity:0,transform:'translateY(-10px)'}),
        animate(800)
      ])
    ])
  ]
})
export class UserComponent implements OnInit {
 users;
  constructor(usersService: UsersService) {
    this.users = usersService.getAllUsers();
  }

  ngOnInit() {
  }

}