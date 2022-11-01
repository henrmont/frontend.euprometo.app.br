import { Account } from './account.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  createAccount(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/create/account`, user)
  }

  login(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/api/login_check`, user)
  }

  refreshToken(): Observable<any>  {
    let input = {
      refresh_token: window.localStorage.getItem('refreshToken'),
    }
    return this.http.post<any>(`${environment.baseUrl}/api/token/refresh`, input)
  }

  getValidUser(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/get/valid/user`, user)
  }

  getUserInfo(): Observable<Account> {
    return this.http.get<Account>(`${environment.baseUrl}/api/get/user/info`)
  }

  authenticated(): Observable<Account> {
    return this.http.get<Account>(`${environment.baseUrl}/authenticated`)
  }

  logout() {
    window.localStorage.clear()
    window.location.reload()
  }
}
