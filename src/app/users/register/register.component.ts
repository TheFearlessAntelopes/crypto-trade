import { ToastsManager } from 'ng2-toastr';
import { ToastrService } from './../../services/toastr.service';

import { FormValidationService } from './../../services/form-validation.service';
import { UserAuthService } from './../../services/user-auth.service';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
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
    public toastr: ToastsManager,
    public toastrService: ToastrService,
    private vRef: ViewContainerRef,
  ) {
    this.toastr.setRootViewContainerRef(this.vRef);
  }




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
        this.toastrService.showError(err);
      },
      () => {
        this.appRouter.navigateByUrl('login');
        this.toastrService.showSuccess('Congrats, you are registered!');
      });
  }
}
