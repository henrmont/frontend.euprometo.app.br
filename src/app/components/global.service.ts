import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private snackbar: MatSnackBar,
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
    window.location.reload()
  }

  checkAuthenticated() {
    const token = window.localStorage.getItem('token')
    if (token) {
      return true
    } else {
      return false
    }
  }
}
