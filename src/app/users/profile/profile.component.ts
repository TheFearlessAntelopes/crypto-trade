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
  original: User;
  loaded: boolean;
  editing: boolean;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.editing = true;

    this.userService.getUserDetails()
      .map((response: Response) => response.json())
      .subscribe((response: any) => {
        this.user = response.user;
        this.loaded = true;
        setTimeout(() => this.editing = false, 1);
      },
      error => console.log('Error - ' + error)
    );
  }

  makeEditable() {
    console.log('edit');
    this.original = <User> JSON.parse(JSON.stringify(this.user));
    this.editing = true;
  }

  cancelUpdate() {
    console.log('cancel');
    this.editing = false;
    this.user = this.original;
  }

  updateProfile() {
    console.log('update');

    this.userService.updateUserDetails(this.user)
      // .map((res: Response) => {
      //   if (res) {
      //       if (res.status === 201) {
      //           return [{ status: res.status, json: res }];
      //       } else if (res.status === 200) {
      //           return [{ status: res.status, json: res }];
      //       }
      //   }
      // })
      // .catch((error: any) => {
      //   if (error.status < 400 ||  error.status === 500) {
      //       return Observable.throw(new Error(error.status));
      //   }
      // })
      .subscribe((response: any) => {
        this.editing = false;
      },
      error => {
        console.log('Error - ' + error);
      }
    );
  }
}
