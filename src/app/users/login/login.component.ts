import { UserAuthService } from './../../services/user-auth.service';
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

  user: User = new User();

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private appRouter: Router
  ) { }

  ngOnInit() {
    if (this.userAuthService.isLogged()) {
      // Notifications should be printed with toastr ( also through a service )
      console.log('User is already logged in!');

      this.appRouter.navigateByUrl('');
    }
  }

  onSubmit() {
    this.userService.loginUser(this.user)
      .map((res) => res.json())
      .subscribe((response: any) => {
        if (!response.username) {
          throw new Error('Something went wrong!');
        }

        this.userAuthService.setLoggedUser(response.username);

        console.log('Successfully logged in!');
      }, (err) => {
        console.log(err);
      }, () => {
        this.appRouter.navigateByUrl('');
      });
  }

}
