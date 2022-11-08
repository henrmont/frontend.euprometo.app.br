import { Router } from '@angular/router';
import { GlobalService } from './../../global.service';
import { PoliticianService } from './../politician.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Politician } from './../politician.model';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-politician-delete-box',
  templateUrl: './politician-delete-box.component.html',
  styleUrls: ['./politician-delete-box.component.css']
})
export class PoliticianDeleteBoxComponent implements OnInit {

  politician: Politician = {
    id: this.data.id
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PoliticianDeleteBoxComponent>,
    private politicianService: PoliticianService,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.politicianService.deletePolitician(this.politician).subscribe(
      (response: any) => {
        this.globalService.showMessage(response.message)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/admin/politicos'])
        });
        this.dialogRef.close()
      }
    )
  }

}
