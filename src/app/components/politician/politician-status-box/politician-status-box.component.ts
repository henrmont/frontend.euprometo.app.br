import { GlobalService } from './../../global.service';
import { PoliticianService } from './../politician.service';
import { Router } from '@angular/router';
import { Politician } from './../politician.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-politician-status-box',
  templateUrl: './politician-status-box.component.html',
  styleUrls: ['./politician-status-box.component.css']
})
export class PoliticianStatusBoxComponent implements OnInit {

  politician: Politician = {
    id: this.data.id
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PoliticianStatusBoxComponent>,
    private politicianService: PoliticianService,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.politicianService.statusPolitician(this.politician).subscribe(
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
