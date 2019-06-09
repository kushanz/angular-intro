import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }
  getAllUsers() {
    return [
      "Kushan","Samith","Nuwan","predeep","chamara"
    ];
  }
}