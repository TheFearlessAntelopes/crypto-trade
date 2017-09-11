import { FormValidationService } from './../../services/form-validation.service';
import { UserAuthService } from './../../services/user-auth.service';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userForm: FormGroup;
  public disabled: string | boolean;
  private isLoggedIn: boolean;
  public minPassword = 4;

  // tslint:disable-next-line:quotemark
  user: User = new User();

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private appRouter: Router,
    private formValidationService: FormValidationService,
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.userAuthService.isLogged();

    if (this.isLoggedIn) {
      this.appRouter.navigateByUrl('');
      return;
    }
    // tslint:disable-next-line:max-line-length
    this.userForm = this.formValidationService.formValidation('username', 'firstName', 'lastName', 'email', 'password', 'passwordConfirm');
    this.userForm.statusChanges.subscribe(data => {
      this.formValidationService.submitButtonValidation(this.userForm);
      if (this.userForm['FormIsOK']) {
        this.disabled = null;
      } else {
        this.disabled = 'disabled';
      }
    });
  }
  get passwords(): any { return this.userForm.get('passwords'); }

  onSubmit(): void {
    this.userService.registerUser(this.user)
      .map((res) => res.json())
      .subscribe((responseUser: any) => {
        console.log('Congrats, you are registered!');
      }, (err) => {
      },
      () => {
        this.appRouter.navigateByUrl('login');
      });
  }
}
