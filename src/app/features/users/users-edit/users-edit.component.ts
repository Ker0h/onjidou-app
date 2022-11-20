import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, Gender } from 'src/app/models/User';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  private _id: string | null;
  private _user: User; 
  private _genders: Gender[];

  constructor(private router: Router, private route: ActivatedRoute, 
    private userService: UserService) {
      this._id = null;
      this._user = new User();
      this._genders = Object.values(Gender);
  }

  get id() {
    return this._id;
  }

  get user() {
    return this._user;
  }

  get genders() {
    return this._genders;
  }

  addUser(user: User) {
    this.userService.addUser(user)
    .subscribe(() => {
      this.router.navigate(["/users"]);
    })
  }

  updateUser(user: User) {
    this.userService.updateUser(user)
    .subscribe(() => {
      this.router.navigate(["/users", this._user.id]);
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._id = params.get("id");

      // On edit
      if(this._id) {
        this.userService.getUser(this._id)
        .subscribe((data: User) => {
          this._user = data;
        });
      }
    });
  }

}
