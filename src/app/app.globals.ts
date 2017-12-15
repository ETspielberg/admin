import {HttpHeaders} from '@angular/common/http';

export const filesUrl = '/files';
export const serviceRunnerUrl = '/services/run';
export const userUrl = '/adminapi';
export const batchUrl = '/services/batch';
export const headers = new HttpHeaders().set('Content-Type', 'application/json');
