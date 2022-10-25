import { GlobalService } from './../../components/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-panel',
  templateUrl: './template-panel.component.html',
  styleUrls: ['./template-panel.component.css']
})
export class TemplatePanelComponent implements OnInit {

  constructor(
    public globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }

}
