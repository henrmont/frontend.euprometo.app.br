import { Gallery, GalleryRef } from 'ng-gallery';
import { Post } from './../post.model';
import { PostService } from './../post.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-view-full',
  templateUrl: './post-view-full.component.html',
  styleUrls: ['./post-view-full.component.css']
})
export class PostViewFullComponent implements OnInit {

  @Input() data!: any
  galleryId: any = this.data

  post: Post = {
    title: '',
    subtitle: '',
    content: '',
    files: [],
    createdAt: null,
  }

  constructor(
    private postService: PostService,
    private gallery: Gallery,
  ) { }

  ngOnInit(): void {
    this.postService.getPost(this.data).subscribe(
      (response: any) => {
        this.post = response.data

        const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
        this.post.files?.forEach(
          (element: any) => {
            if (this.contentType(element.file) == 'image/png' || this.contentType(element.file) == 'image/jpeg') {
              galleryRef.addImage({
                src: element.file,
                thumb: element.file,
                title: 'Some title'
              });
            } else {
              galleryRef.addVideo({
                src: [
                  {
                    url: element.file,
                    type: 'video/mp4',
                  },
                ],
              });
            }
          }
        )
      }
    )
  }

  contentType(url: any) {
    let mimeType = url.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]

    return mimeType
  }

}
