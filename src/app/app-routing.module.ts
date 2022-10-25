import { AccountGuard } from './components/account/account.guard';
import { ViewPanelComponent } from './views/view-panel/view-panel.component';
import { TemplatePanelComponent } from './templates/template-panel/template-panel.component';
import { ViewAccountCreateComponent } from './views/view-account-create/view-account-create.component';
import { TemplateAccountComponent } from './templates/template-account/template-account.component';
import { TemplateGeneralComponent } from './templates/template-general/template-general.component';
import { ViewLoginComponent } from './views/view-login/view-login.component';
import { ViewMainComponent } from './views/view-main/view-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TemplateGeneralComponent,
    children: [
      {path: '', component: ViewMainComponent},
    ]
  },
  {
    path: 'conta',
    component: TemplateAccountComponent,
    children: [
      {path: 'login', component: ViewLoginComponent},
      {path: 'criar', component: ViewAccountCreateComponent},
    ]
  },
  {
    path: 'painel',
      component: TemplatePanelComponent,
      children: [
        {path: '', component: ViewPanelComponent},
      ],
      canActivate: [AccountGuard]
  }

  // {
  //   path: 'conta',
  //   component: AccountLayoutComponent,
  //   children: [
  //     {path: '', redirectTo: 'login', pathMatch: 'full'},
  //     {path: 'login', component: ViewLoginAccountComponent},
  //     {path: 'criar', component: ViewCreateAccountComponent},
  //     {path: 'recuperar/senha', component: ViewForgotPasswordComponent},
  //     {path: 'resetar/senha', component: ViewResetPasswordComponent},
  //   ]
  // },
  // {
  //   path: '',
  //   component: AppLayoutComponent,
  //   children: [
  //     {path: 'inicio', component: ViewHomeComponent},
  //     {path: 'budget', component: ViewBudgetComponent},
  //     {path: 'budget/:id', component: ViewBudgetComponent},
  //   ],
  //   canActivate: [AccountGuard]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
