import { Component, Input, OnInit } from '@angular/core';
import { Gallery, GalleryRef } from 'ng-gallery';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  @Input() data!: any
  galleryId!: any

  constructor(
    private gallery: Gallery,
  ) { }

  ngOnInit(): void {
    this.galleryId = this.data.id

    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    this.data.files.forEach(
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

  contentType(url: any) {
    let mimeType = url.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]

    return mimeType
  }

}
