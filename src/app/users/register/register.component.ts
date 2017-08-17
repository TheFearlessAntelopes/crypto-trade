import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: User = new User();

  constructor(
    private userService: UserService,
    private appRouter: Router) { }

  ngOnInit() {
    // Should redirect if user is logged in ( implement user.loggedIn() functionality )
  }

  onSubmit(form: NgForm): void {
    this.userService.registerUser(this.user)
      .map((res) => res.json())
      .subscribe((responseUser: any) => {
        console.log('Congrats, you are registered!');
      }, (err) => {
        console.log(err);
      },
    () => {
      this.appRouter.navigateByUrl('login');
    });
  }

}
