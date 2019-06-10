import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

getPost(){
  this.http.get<myData>('http://tryndev.com/wp-json/wp/v2/posts')
  
}
  

}