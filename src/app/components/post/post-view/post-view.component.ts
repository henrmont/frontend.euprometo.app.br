import { Post } from './../post.model';
import { Component, Input, OnInit } from '@angular/core';
import { Gallery, GalleryItem, GalleryRef, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  @Input() data!: any
  galleryId!: any
  images!: GalleryItem[]

  constructor(
    private gallery: Gallery
  ) { }

  ngOnInit(): void {
    // this.galleryId = this.data.id
    // const galleryRef = this.gallery.ref('myGallery');

    // const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    this.images = [
      new ImageItem({
        src: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/14179421596_b95c10db10_o.jpeg',
        thumb: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/14179421596_b95c10db10_o.jpeg'
      })
    ]

    // galleryRef.addImage({
    //   src: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/14179421596_b95c10db10_o.jpeg',
    //   thumb: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/14179421596_b95c10db10_o.jpeg',
    //   title: 'Some title'
    // });
  }

  // toggled: boolean = false;
  // handleSelection(event: any) {
  //   this.comment += event.char
  //   // console.log(event.char);
  // }

  contentType(url: any) {
    let mimeType = url.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]

    return mimeType
  }

}
