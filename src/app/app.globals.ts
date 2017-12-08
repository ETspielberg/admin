import {HttpHeaders} from '@angular/common/http';

export const settingsUrl = '/settings';
export const dataUrl = '/media/data';
export const filesUrl = 'http://localhost:11855/files';
export const getterUrl = '/media/getter';
export const resourcesUrl = 'http://localhost:11500';
export const serviceRunnerUrl = 'http://localhost:11844/run';
export const userUrl = 'http://localhost:11999';
export const gatewayurl = 'http://localhost:8080/admin/resources';
export const batchUrl = '/batch';
export const headers = new HttpHeaders().set('Content-Type', 'application/json');
export const ignoredUrl = '/blacklist';
