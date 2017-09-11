import { ToastsManager } from 'ng2-toastr';
import { ToastrService } from './../../services/toastr.service';
import { UserAuthService } from './../../services/user-auth.service';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
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
    private appRouter: Router,
    public toastr: ToastsManager,
    public toastrService: ToastrService,
    private vRef: ViewContainerRef,
  ) { this.toastr.setRootViewContainerRef(this.vRef); }



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
        if (!response.user) {
          this.toastrService.showError('Something went wrong!');
          throw new Error('Something went wrong!');
        }
        this.userAuthService.setLoggedUser(response.user);
        this.toastrService.showSuccess();
        console.log('Successfully logged in!');
      }, (err) => {
        console.log(err);
      }, () => {
        // this.toastrService.showSuccess();
        this.appRouter.navigateByUrl('');
      });
  }

}
