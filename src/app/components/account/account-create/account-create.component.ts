import { Router } from '@angular/router';
import { GlobalService } from './../../global.service';
import { AccountService } from './../account.service';
import { Account } from './../account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  password = ''
  cpassword = ''
  statusPassword = false
  statusEmail = false

  account: Account = {
    email: '',
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
    if (this.password == this.cpassword && this.password!='' && this.cpassword!='')
    {
      this.statusPassword = true
    } else {
      this.statusPassword = false
    }
  }

  checkEmail() {
    if (this.account.email?.indexOf("@") != -1 && this.account.email?.match(/@/g)?.length == 1 && this.account.email?.charAt(0) != "@" && this.account.email?.slice(-1) != "@")
    {
      this.statusEmail = true
    } else {
      this.statusEmail = false
    }
  }

  onSubmit() {
    this.account.password = this.password
    this.accountService.createAccount(this.account).subscribe(
      (response: any) => {
        this.globalService.showMessage(response.message)
        if (response.status == true) {
          this.router.navigate([''])
        }
      }
    )
  }

}
