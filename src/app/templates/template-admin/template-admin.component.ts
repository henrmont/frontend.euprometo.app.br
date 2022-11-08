import { GlobalService } from './../../components/global.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-admin',
  templateUrl: './template-admin.component.html',
  styleUrls: ['./template-admin.component.css']
})
export class TemplateAdminComponent implements OnInit {

  authenticated!: boolean
  title!: string

  constructor(
    private arouter: ActivatedRoute,
    public globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.authenticated = this.globalService.checkAuthenticated()
  }

  changeTitle(title: string) {
    this.title = title
  }

}
