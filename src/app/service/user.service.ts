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
    return this.http.get<User[]>(appGlobals.userUrl + '/users');
  }
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(appGlobals.userUrl + '/roles');
  }
  setUserRole(): Observable<User> {
    return this.http.post<User> (appGlobals.userUrl + '/users', appGlobals.headers);
  }
  getRoleNames(): Observable<Role[]> {
    return this.http.get<Role[]>(appGlobals.userUrl + '/rolenames');
  }

  deleteUser(user: User): Observable<object> {
    return this.http.delete(appGlobals.userUrl + '/users/' + user.id);
  }
  updatePassword(user: User): Observable<object> {
    return this.http.patch(appGlobals.userUrl + '/users/' + user.id, {newPassword: user.newPassword}, {headers: appGlobals.headers});
  }
  updateUserroles(user: User): Observable<object> {
    return this.http.patch(appGlobals.userUrl + '/users/' + user.id, {roles: user.roles}, {headers: appGlobals.headers});
  }
}
