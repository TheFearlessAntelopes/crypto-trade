import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(
    private userService: UserService,
    private appRouter: Router
  ) { }

  ngOnInit() {
    // Check if user is not currently logged
  }

  onSubmit(form: NgForm) {
    this.userService.loginUser(this.user)
      .map((res) => res.json())
      .subscribe((response: any) => {
        if (!response.username) {
          throw new Error('Something went wrong!');
        }

        console.log('Successfully logged in!');
      }, (err) => {
        console.log(err);
      }, () => {
        this.appRouter.navigateByUrl('');
      });
  }

}
