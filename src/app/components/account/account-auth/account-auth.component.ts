import { GlobalService } from './../../global.service';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-auth',
  templateUrl: './account-auth.component.html',
  styleUrls: ['./account-auth.component.css']
})
export class AccountAuthComponent implements OnInit {

  statusPassword = false
  statusEmail = false

  account: Account = {
    username: '',
    password: ''
  }

  constructor(
    private accountService: AccountService,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  checkPassword() {
    if (this.account.password != '')
    {
      this.statusPassword = true
    } else {
      this.statusPassword = false
    }
  }

  checkEmail() {
    if (this.account.username?.indexOf("@") != -1 && this.account.username?.match(/@/g)?.length == 1 && this.account.username?.charAt(0) != "@" && this.account.username?.slice(-1) != "@")
    {
      this.statusEmail = true
    } else {
      this.statusEmail = false
    }
  }

  onSubmit() {
    this.accountService.login(this.account).subscribe(
      (response: any) => {
        this.accountService.getValidUser(this.account).subscribe(
          (user: any) => {
            if (user.status) {
              window.localStorage.setItem('token', response.token)
              this.router.navigate(['painel'])
            } else {
              this.globalService.showMessage(user.message)
            }
          }
        )
      },
      (err) => {
        this.globalService.showMessage('Credenciais inválida')
      }
    )
  }

}
