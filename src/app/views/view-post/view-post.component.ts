import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  post!: any

  constructor(
    private arouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.post = this.arouter.snapshot.paramMap.get('post')
  }

}
