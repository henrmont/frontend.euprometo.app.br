import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  showMessage(message: any) {
    this.snackbar.open(message, 'Fechar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

  logout() {
    window.localStorage.removeItem('token')
    this.router.navigate(['/']);
  }
}
