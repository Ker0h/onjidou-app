import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  private _id: string | null;
  private _newUser: User;
  private _user: User; 

  constructor(private route: ActivatedRoute, 
    private userService: UserService) {
      this._id = null;
      this._user = new User();
      this._newUser = new User();
  }

  get id() {
    return this._id;
  }

  get user() {
    return this._user;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._id = params.get("id");

      if(this._id) {
        this.userService.getUser(this._id)
        .subscribe((data: User) => {
          this._user = data;
        });
      } else {
        this._newUser = new User();
      }
    });
  }

}
