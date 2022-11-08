import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-politician-image-crop',
  templateUrl: './politician-image-crop.component.html',
  styleUrls: ['./politician-image-crop.component.css']
})
export class PoliticianImageCropComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PoliticianImageCropComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    if (!this.data.event.target.files[0]) {
      this.dialogRef.close()
    }
  }

  imgChangeEvt: any = this.data.event
  cropImgPreview: any = ''

  cropImg(e: ImageCroppedEvent) {
      this.cropImgPreview = e.base64
  }

  imgLoad() {
      // display cropper tool
  }

  initCropper() {
      // init cropper
  }

  imgFailed() {
      // error msg
  }

  uploadImage() {
    this.data.image.splice(0)
    this.data.image.push(this.cropImgPreview)
    this.dialogRef.close()
  }

}
