import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserAuthService } from './../../services/user-auth.service';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { UserRegistrationValidationService } from './../../services/user-registration-validation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private namePattern = '^[a-zA-Z]+( [a-zA-Z]+)*$';

  user: User;
  original: User;
  loaded: boolean;
  editing: boolean;
  userCurrencies: Array<{}>;
  // public userForm: FormGroup;
  // public disabled: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private userAuthService: UserAuthService,
    // private userRegistrationValidationService: UserRegistrationValidationService
  ) { }

  ngOnInit() {
    if (!this.userAuthService.isLogged()) {
      this.router.navigateByUrl('');
      return;
    }

    // this.userForm = new FormGroup({
    //   firstName: new FormControl('', [Validators.pattern(this.namePattern)]),
    //   lastName: new FormControl('', [Validators.pattern(this.namePattern)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   submit: new FormControl('', this.userRegistrationValidationService.formValid),
    // });

    // this.userForm.statusChanges.subscribe(data => {
    //   this.userRegistrationValidationService.formValid(this.userForm);
    //   if (this.userForm['FormIsOK']) {
    //     this.disabled = null;
    //   } else {
    //     this.disabled = 'disabled';
    //   }
    // });

    this.editing = true;
    Observable.zip(this.userService.getUserDetails(),
      this.userService.getUserCurrencies())
      .map((response) => {
        return {
          details: response[0].json(),
          curencies: response[1].json()
        };
      })
      .subscribe((response) => {
        this.user = response.details.user;
        this.userCurrencies = response.curencies.currencies;
        this.loaded = true;
        setTimeout(() => this.editing = false, 1);
      },
      error => console.log('Error - ' + error)
      );
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.userRegistrationValidationService.formValid(this.userForm);
  // }

  makeEditable() {
    this.original = <User>JSON.parse(JSON.stringify(this.user));
    this.editing = true;
  }

  cancelUpdate() {
    this.editing = false;
    this.user = this.original;
  }

  updateProfile() {
    this.userService.updateUserDetails(this.user)
      .map((res) => res.json())
      .subscribe(
      (response) => {
        this.editing = false;
      },
      (error) => {
        console.log('Error - ' + error);
      }
      );
  }
}
