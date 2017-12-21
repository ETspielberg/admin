import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FileService} from './service/file.service';
import {UserService} from './service/user.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MultiSelectModule, FileUploadModule, GrowlModule, ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import {RouterModule} from '@angular/router';
import {AdminUserrolesComponent} from './admin.userroles.component';
import {appRouting} from './app.routing';
import {AppStartComponent} from './app.start.component';
import {AuthentificationService} from './service/authentification.service';

@NgModule({
  declarations: [
    AppComponent,
    AppStartComponent,
    AdminUserrolesComponent
  ],
  imports: [
    ConfirmDialogModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    FileUploadModule,
    GrowlModule,
    MultiSelectModule,
    appRouting
  ],
  exports: [ ],
  providers: [FileService, UserService, ConfirmationService,AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
