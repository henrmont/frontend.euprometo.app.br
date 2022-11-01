import { Router } from '@angular/router';
import { PostService } from './../../components/post/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-panel',
  templateUrl: './view-panel.component.html',
  styleUrls: ['./view-panel.component.css']
})
export class ViewPanelComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (window.localStorage.getItem('token')) {
      this.router.navigate(['main'])
    }
  }

}
