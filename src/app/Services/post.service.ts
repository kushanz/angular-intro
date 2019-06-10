import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PostService {

  constructor(private postClient: HttpClient) { }

getPost(){
  this.postClient.get('http://tryndev.com/wp-json/wp/v2/posts')
  .subscribe(data => {
    console.log(data)
  })
}
  

}