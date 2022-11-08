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

  files: any[] = []
  limit: boolean = false
  fileType: string = 'image/png, image/jpeg, video/mp4'

  public Editor = ClassicEditor;

  post: Post = {
    title: '',
    subtitle: '',
    content: '',
    files: []
  }

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

  checkFiles() {
    if (this.files.length == 0) {
      return true
    } else {
      return false
    }
  }

  checkLimit() {
    if (this.files.length < 6) {
      this.limit = false
    } else {
      this.limit = true
    }
  }

  onFileChange(event: any): void {
    const file:File = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file as Blob)
    reader.onloadend = (e) => {
      reader.result as string

      if (reader.result) {
        this.files.push(reader.result)
        this.checkLimit()
      }
    }
  }

  contentType(url: any) {
    let mimeType = url.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]

    return mimeType
  }

  deleteItem(i: number) {
    this.files.splice(i, 1)
    this.checkLimit()
  }

  onSubmit() {
    this.post.files = this.files
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
