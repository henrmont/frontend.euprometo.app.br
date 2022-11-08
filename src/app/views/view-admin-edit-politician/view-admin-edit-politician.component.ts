import { PoliticianImageCropComponent } from './../../components/politician/politician-image-crop/politician-image-crop.component';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from './../../components/global.service';
import { PoliticianService } from './../../components/politician/politician.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, startWith, map } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Politician } from './../../components/politician/politician.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-admin-edit-politician',
  templateUrl: './view-admin-edit-politician.component.html',
  styleUrls: ['./view-admin-edit-politician.component.css']
})
export class ViewAdminEditPoliticianComponent implements OnInit {

  @Output() titleData: EventEmitter<string> = new EventEmitter()
  title: string = this.arouter.snapshot.data['title']

  politician: Politician = {
    id: null,
    name: '',
    state: '',
    party: '',
    type: '',
    image: null
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
    this.politicianService.getPolitician(this.arouter.snapshot.paramMap.get('id')).subscribe(
      (response: any) => {
        if (response.status) {
          this.politician = response.data
          console.log(this.politician)
          this.image.push(response.data.image)
        }
      }
    )
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
    this.politicianService.editPolitician(this.politician).subscribe(
      (response: any) => {
        if (response.status) {
          this.globalService.showMessage(response.message)
          this.router.navigate(['admin/politicos'])
        } else {
          this.globalService.showMessage(response.message)
        }
      }
    )
  }

}
