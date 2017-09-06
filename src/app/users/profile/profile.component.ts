import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  editing = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUserDetails()
      .map((res) => res.json())
      .subscribe((response: any) => {
        console.log(response);
        this.user = response.user;
        console.log(this.user.firstName);
      });
  }

  makeEditable() {
    console.log('edit');
    this.editing = true;
  }

  updateProfile() {

  }
}
