import {Component, OnInit} from '@angular/core';
import {UserService} from './service/user.service';
import {User} from './model/User';
import {Role} from './model/Role';
import {Option} from './model/Option';

@Component({
    selector: 'app-userroles',
    templateUrl: 'admin.userroles.component.html'
})

export class AdminUserrolesComponent implements OnInit {

  public users: User[];

  public roles: Role[];

  public newPassword: string;

  public availableRoles: Option[];

  public selectedRoles: number[];

  constructor(private userService: UserService) {
    this.availableRoles = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
    this.userService.getRoles().subscribe(
      data => {
        this.roles = data;
        for (const role of this.roles) {
          this.availableRoles.push(new Option(role.id, role.name.substring(5).toLowerCase()));
        }
      }
    );
  }

  setPassword(): void {
    console.log(this.newPassword);
  }
}
