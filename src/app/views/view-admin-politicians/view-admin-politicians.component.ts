import { PoliticianDeleteBoxComponent } from './../../components/politician/politician-delete-box/politician-delete-box.component';
import { PoliticianStatusBoxComponent } from './../../components/politician/politician-status-box/politician-status-box.component';
import { MatDialog } from '@angular/material/dialog';
import { PoliticianService } from './../../components/politician/politician.service';
import { Politician } from './../../components/politician/politician.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-admin-politicians',
  templateUrl: './view-admin-politicians.component.html',
  styleUrls: ['./view-admin-politicians.component.css']
})
export class ViewAdminPoliticiansComponent implements OnInit {

  @Output() titleData: EventEmitter<string> = new EventEmitter()
  title: string = this.arouter.snapshot.data['title']

  politicians: Politician[] = []

  constructor(
    private arouter: ActivatedRoute,
    private router: Router,
    private politicianService: PoliticianService,
    private dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['image', 'info', 'actions'];
  dataSource = new MatTableDataSource(this.politicians);

  ngOnInit(): void {
    this.politicianService.getPoliticians().subscribe(
      (response: any) => {
        if (response.status) {
          this.politicians = response.data
          this.dataSource = new MatTableDataSource(this.politicians)
        }
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  statusPolitician(id: any): void {
    this.dialog.open(PoliticianStatusBoxComponent, {
      data: {
        id: id,
      },
      width: '500px',
      // disableClose: true
    });
  }

  deletePolitician(id: any): void {
    this.dialog.open(PoliticianDeleteBoxComponent, {
      data: {
        id: id,
      },
      width: '500px',
      // disableClose: true
    });
  }



}
