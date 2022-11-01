import { AccountService } from './../../components/account/account.service';
import { GlobalService } from './../../components/global.service';
import { Post } from './../../components/post/post.model';
import { PostService } from './../../components/post/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.css']
})
export class ViewMainComponent implements OnInit {

  posts!: Post[]

  constructor(
    private postService: PostService,
    private globalService: GlobalService,
  ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (response: any) => {
        if (response.status) {
          this.posts = response.data
        } else {
          this.globalService.showMessage(response.message)
        }
      },
      (error: any) => {
        // console.log('teste')
      }
    )
  }

}
