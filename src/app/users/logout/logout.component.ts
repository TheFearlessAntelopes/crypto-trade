import { UserAuthService } from './../../services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private appRouter: Router
  ) { }

  ngOnInit() {
    this.userService.logoutUser()
      .subscribe((response: any) => {
        this.userAuthService.clearUserCookie();

        console.log('Logout successfull!');
      }, (err) => {
        console.log(err);
      }, () => {
        this.appRouter.navigateByUrl('');
      });
  }

}
