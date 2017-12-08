import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserService} from '../service/user.service';
import {FileUploadModule, GrowlModule} from 'primeng/primeng';
import {CommonModule} from '@angular/common';
import {FileService} from '../service/file.service';
import {HttpClientModule} from '@angular/common/http';
import {ClassificationComponent} from './classification.component';
import {classificationRouting} from './classifiaction.routing';

@NgModule({
  imports: [HttpClientModule,
    RouterModule,
    FileUploadModule,
    GrowlModule,
    CommonModule,
    classificationRouting],
  declarations: [ClassificationComponent],
  exports: [],
  providers: [UserService, FileService]
})

export class ClassificationModule {}
