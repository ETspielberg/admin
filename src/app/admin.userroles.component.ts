import {Component, OnInit} from '@angular/core';
import {UserService} from './service/user.service';
import {User} from './model/User';
import {Role} from './model/Role';
import {Option} from './model/Option';
import {ConfirmationService} from 'primeng/primeng';

@Component({
  selector: 'app-userroles',
  templateUrl: 'admin.userroles.component.html'
})

export class AdminUserrolesComponent implements OnInit {

  public users: User[];

  public roles: Role[];

  public newPassword: string;

  public availableRoles: Option[];

  constructor(private userService: UserService, private confirmationService: ConfirmationService) {
    this.availableRoles = [];
  }

  ngOnInit(): void {
    this.userService.getRoleNames().subscribe(
      data => {
        this.roles = data;
        for (const role of this.roles) {
          this.availableRoles.push(new Option(role, role.name.substring(5).toLowerCase()));
          console.log(role);
        }
      }
    );
    this.updateUsers();
  }

  updateUsers() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Do you really want to delete user ' + user.username + '?',
      accept: () => {
        this.userService.deleteUser(user).subscribe(
          () => this.userService.getUsers().subscribe(
            data => this.users = data),
          error => this.userService.getUsers().subscribe(
            data => this.users = data)
        );
      }
    });
  }

  setPassword(user: User): void {
    this.userService.updatePassword(user).subscribe(
      () => {
        this.updateUsers();
      });
  }

  updateRoles(user: User): void {
    this.userService.updateUserroles(user).subscribe(
      () => this.updateUsers()
    )
  }
}
