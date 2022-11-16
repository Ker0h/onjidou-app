import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  private _users!: User[];

  constructor(private userService: UserService) { 

  }

  get users(): User[] {
    return this._users;
  }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe((data: User[]) => {
      console.log(data);
      this._users = data;
    })
  }

  ngOnDestroy() {

  }
}
