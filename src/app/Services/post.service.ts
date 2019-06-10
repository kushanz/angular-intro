import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

getPost(){
  return this.http.get('https://tryndev.com/wp-json/wp/v2/posts')
  
}

}