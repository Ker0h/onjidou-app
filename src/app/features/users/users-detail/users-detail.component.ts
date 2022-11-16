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
  private _id: string | null = null;
  private _user!: User;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private userService: UserService) {}

  get user(): User {
    return this._user;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._id = params.get("id");
    });

    this.userService.getUser(this._id)
    .subscribe((data: User) => {
      this._user = data;
    })
  }

}
