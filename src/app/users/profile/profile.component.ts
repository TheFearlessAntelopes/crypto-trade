import { Response } from '@angular/http';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  editing: boolean;
  loaded: boolean;

  constructor(
    private userService: UserService
  ) {
    this.loaded = false;
    console.log('Loaded - ' + this.loaded);
  }

  ngOnInit() {
    this.editing = false;
    console.log(this.editing);
    this.userService.getUserDetails()
      .map((response: Response) => response.json())
      .subscribe((response: any) => {
        console.log(response);
        this.user = response.user;
        console.log(this.user.username);
        this.loaded = true;
        console.log('Loaded - ' + this.loaded);
      },
      error => console.log('Error - ' + error)
    );
  }

  makeEditable() {
    console.log('edit');
    this.editing = true;
  }

  updateProfile() {
    console.log('update');
    this.editing = false;
  }
}
