import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/User';
import * as appGlobals from '../app.globals';
import {Role} from '../model/Role';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(appGlobals.gatewayurl + '/users');
  }
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(appGlobals.gatewayurl + '/roles');
  }
  setUserRole(): Observable<User> {
    return this.http.post<User> (appGlobals.gatewayurl + '/users', appGlobals.headers);
  }
}
