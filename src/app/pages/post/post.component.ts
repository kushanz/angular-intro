import { Component, OnInit } from '@angular/core';
import { PostService } from '../../Services/post.service';
interface myData {
  obj: Object
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
postlist = {};
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postlist = this.PostService.getPost().subscribe(data=> {
      console.log(data)
    });
  }

}