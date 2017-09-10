import { FormValidationService } from './../../services/form-validation.service';
import { UserAuthService } from './../../services/user-auth.service';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges {

  public disabled: string;
  private isLoggedIn: boolean;

  // tslint:disable-next-line:quotemark
  user: User = new User();
  public userForm: FormGroup;

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private appRouter: Router,
    private formValidationService: FormValidationService,
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.userAuthService.isLogged();

    if (this.isLoggedIn) {
      this.appRouter.navigateByUrl('');
    }
    // tslint:disable-next-line:max-line-length
    this.userForm = this.formValidationService.formValidation(this.userForm, 'username', 'firstName', 'lastName', 'email', 'password', 'passwordConfirm');
    // this.userRegistrationValidationService.registeringValidation();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.formValidationService.formValid(this.userForm);
  }
  get passwords(): any { return this.userForm.get('passwords'); }

  onSubmit(): void {
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
