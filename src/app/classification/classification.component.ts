import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileService} from '../service/file.service';
import {FileWithLink} from '../model/FileWithLink';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
})
export class ClassificationComponent implements OnInit {
  files: FileWithLink[];
  msgs: Message[];
  uploadedFiles: any[] = [];
  ngOnInit(): void {
    this.getAllFiles();
  }

  constructor(private http: HttpClient, private fileService: FileService) {
    this.getAllFiles();
  }

  getAllFiles() {
    this.fileService.listAllFiles('systematik').subscribe(
      res => this.files = res
    );
  }
  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
