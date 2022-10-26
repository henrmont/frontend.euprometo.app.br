import { GlobalService } from './../../components/global.service';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-general',
  templateUrl: './template-general.component.html',
  styleUrls: ['./template-general.component.css']
})
export class TemplateGeneralComponent implements OnInit {

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
