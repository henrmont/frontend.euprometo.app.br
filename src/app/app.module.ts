import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountInterceptor } from './components/account/account.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { GalleryModule } from  'ng-gallery';



import { ViewMainComponent } from './views/view-main/view-main.component';
import { ViewLoginComponent } from './views/view-login/view-login.component';
import { TemplateGeneralComponent } from './templates/template-general/template-general.component';
import { TemplateAccountComponent } from './templates/template-account/template-account.component';
import { AccountAuthComponent } from './components/account/account-auth/account-auth.component';
import { AccountCreateComponent } from './components/account/account-create/account-create.component';
import { ViewAccountCreateComponent } from './views/view-account-create/view-account-create.component';
import { ViewPanelComponent } from './views/view-panel/view-panel.component';
import { ViewAdminComponent } from './views/view-admin/view-admin.component';
import { ViewAdminNewPostComponent } from './views/view-admin-new-post/view-admin-new-post.component';
import { PostViewComponent } from './components/post/post-view/post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewMainComponent,
    ViewLoginComponent,
    TemplateGeneralComponent,
    TemplateAccountComponent,
    AccountAuthComponent,
    AccountCreateComponent,
    ViewAccountCreateComponent,
    ViewPanelComponent,
    ViewAdminComponent,
    ViewAdminNewPostComponent,
    PostViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,

    CKEditorModule,
    GalleryModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AccountInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
