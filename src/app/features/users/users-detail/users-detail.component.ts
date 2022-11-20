import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  private _id: string | null;
  private _user!: User;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private userService: UserService) {
      this._id = null;
    }

  get user(): User {
    return this._user;
  }

  getUser(id: string | null) {
    this.userService.getUser(this._id)
    .subscribe((data: User) => {
      this._user = data;
    })
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user)
    .subscribe(() => {
      this.router.navigate(["/users"]);
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._id = params.get("id");

      this.getUser(this._id);
    });


  }

}
