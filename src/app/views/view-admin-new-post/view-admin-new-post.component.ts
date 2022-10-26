import { PostService } from './../../components/post/post.service';
import { Post } from './../../components/post/post.model';
import { GlobalService } from './../../components/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-view-admin-new-post',
  templateUrl: './view-admin-new-post.component.html',
  styleUrls: ['./view-admin-new-post.component.css']
})
export class ViewAdminNewPostComponent implements OnInit {

  statusTitle: boolean = false
  statusSubtitle: boolean = false
  statusContent: boolean = false

  post: Post = {
    title: '',
    subtitle: '',
    content: '',
  }

  public Editor = ClassicEditor;
  content!: string

  @Output() titleData: EventEmitter<string> = new EventEmitter()
  title: string = this.arouter.snapshot.data['title']

  constructor(
    private arouter: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.titleData.emit(this.title)
  }

  checkTitle() {
    if (this.post.title == '') {
      return true
    } else {
      return false
    }
  }

  checkSubtitle() {
    if (this.post.subtitle == '') {
      return true
    } else {
      return false
    }
  }

  checkContent() {
    if (this.post.content == '') {
      return true
    } else {
      return false
    }
  }

  onSubmit() {
    this.postService.createPost(this.post).subscribe(
      (response: any) => {
        if (response.status) {
          this.globalService.showMessage(response.message)
          this.router.navigate(['admin'])
        } else {
          this.globalService.showMessage(response.message)
        }
      }
    )
  }

}
