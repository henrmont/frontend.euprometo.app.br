import { GlobalService } from './../../components/global.service';
import { PoliticianService } from './../../components/politician/politician.service';
import { PoliticianImageCropComponent } from './../../components/politician/politician-image-crop/politician-image-crop.component';
import { Observable, startWith, map } from 'rxjs';
import { Politician } from './../../components/politician/politician.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

const type = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'},
];

@Component({
  selector: 'app-view-admin-add-politician',
  templateUrl: './view-admin-add-politician.component.html',
  styleUrls: ['./view-admin-add-politician.component.css']
})
export class ViewAdminAddPoliticianComponent implements OnInit {

  @Output() titleData: EventEmitter<string> = new EventEmitter()
  title: string = this.arouter.snapshot.data['title']

  politician: Politician = {
    name: '',
    party: '',
    state: '',
    type: '',
    image: null,
    active: false
  }

  types: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  controlPartys = new FormControl('');
  partys: string[] = [
    'PP - Partido Progressista',
    'PT - Partido dos Trabalhadores',
    'PL - Partido Liberal'
  ];
  filteredPartys!: Observable<string[]>;

  controlStates = new FormControl('');
  states: string[] = [
    'AM - Amazonas',
    'PA - Pará',
    'MT - Mato Grosso'
  ];
  filteredStates!: Observable<string[]>;

  imageFileType: string = 'image/png, image/jpeg'
  @Output() image: string[] = []

  constructor(
    private arouter: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private politicianService: PoliticianService,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.filteredPartys = this.controlPartys.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPartys(value || '')),
    );
    this.filteredStates = this.controlStates.valueChanges.pipe(
      startWith(''),
      map(value => this._filterStates(value || '')),
    );
  }

  private _filterPartys(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.partys.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterStates(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(option => option.toLowerCase().includes(filterValue));
  }

  onImageChange(event: any): void {
    const dialogRef = this.dialog.open(PoliticianImageCropComponent, {
      width: '90%',
      data: {
        event: event,
        image: this.image
      }
    });
  }

  checkName() {
    if (this.politician.name == '') {
      return true
    } else {
      return false
    }
  }

  checkParty() {
    if (this.politician.party == '') {
      return true
    } else {
      return false
    }
  }

  checkState() {
    if (this.politician.state == '') {
      return true
    } else {
      return false
    }
  }

  checkType() {
    if (this.politician.type == '') {
      return true
    } else {
      return false
    }
  }

  onSubmit() {
    if(this.image[0]) {
      this.politician.image = this.image[0]
    }
    this.politicianService.createPolitician(this.politician).subscribe(
      (response: any) => {
        if (response.status) {
          this.globalService.showMessage(response.message)
          this.router.navigate(['admin'])
        } else {
          this.globalService.showMessage(response.message)
        }
      }
    )
  }

}
