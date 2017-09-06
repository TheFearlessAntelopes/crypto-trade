import { UserRegistrationValidationService } from './../../services/user-registration-validation.service';
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

  // tslint:disable-next-line:quotemark
  private namePattern = "^[a-zA-Z]+( [a-zA-Z]+)*$";
  public readonly minPassword = 4;
  user: User = new User();
  public userForm: FormGroup;

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private appRouter: Router,
    private userRegistrationValidationService: UserRegistrationValidationService
  ) { }

  ngOnInit() {
    if (this.userAuthService.isLogged()) {
      console.log('User is already logged in!');
      this.appRouter.navigateByUrl('');
    }

    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      firstName: new FormControl('', [Validators.pattern(this.namePattern)]),
      lastName: new FormControl('', [Validators.pattern(this.namePattern)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      passwords: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(this.minPassword)]),
        passwordConfirm: new FormControl('', [Validators.required]),
      }, this.userRegistrationValidationService.MatchPassword),
      submit: new FormControl('', this.userRegistrationValidationService.formValid),
    });

    this.userForm.statusChanges.subscribe(data => {
      this.userRegistrationValidationService.formValid(this.userForm);
      if (this.userForm['FormIsOK']) {
        console.log(this.userForm);
        console.log('visible');
        this.disabled = null;
      } else {
        console.log('disabled');
        this.disabled = 'disabled';
      }
    });
    console.log(this.userForm);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.userRegistrationValidationService.formValid(this.userForm);
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
