import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {

  @Output() titleData: EventEmitter<string> = new EventEmitter()
  title: string = this.arouter.snapshot.data['title']

  constructor(
    private arouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.titleData.emit(this.title)
  }

}
