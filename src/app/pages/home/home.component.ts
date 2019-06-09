import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../Services/users.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsersService]
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