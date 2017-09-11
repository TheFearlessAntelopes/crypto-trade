import { FormGroup, ValidatorFn, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class FormValidationService {
  private namePattern = '^[a-zA-Z]+( [a-zA-Z]+)*$';
  public readonly minPassword = 4;
  public readonly minNameLength = 3;
  public readonly maxNameLength = 25;

  constructor() { }
  private MatchPassword(group: FormGroup): ValidatorFn {
    const password = group.get('password').value; // to get value in input tag
    const confirmPassword = group.get('passwordConfirm').value; // to get value in input tag
    if (password !== confirmPassword) {
      group['passwordsMatch'] = false;
    } else {
      group['passwordsMatch'] = true;
      return null;
    }
  }
  public submitButtonValidation(group: FormGroup): ValidatorFn {
    if (group.controls.passwords) {
      if (group.root.get('passwords') && group.root) {
        if (group.root.get('passwords')['passwordsMatch'] &&
          group.root.valid
        ) {
          group.root['FormIsOK'] = true;
        } else {
          group.root['FormIsOK'] = false;
        }
      }
      return null;
    } else {
      if (group.root.valid) {
        group.root['FormIsOK'] = true;
      } else {
        group.root['FormIsOK'] = false;
      }
    }
  }

  public formValidation(
    username: PropertyKey,
    firstName: PropertyKey,
    lastName: PropertyKey,
    email: PropertyKey,
    password: PropertyKey,
    passwordConfirm: PropertyKey,
  ) {
    const formFields: { passwords?: FormGroup } = {};

    if (username) {
      formFields[username] = new FormControl('', [Validators.required, Validators.minLength(this.minNameLength),
         Validators.maxLength(this.maxNameLength)]);
    }

    if (firstName) {

      formFields[firstName] = new FormControl('', [Validators.minLength(this.minNameLength),
         Validators.pattern(this.namePattern), Validators.maxLength(this.maxNameLength)]);
    }

    if (lastName) {
      formFields[lastName] = new FormControl('', [Validators.minLength(this.minNameLength),
         Validators.pattern(this.namePattern), Validators.maxLength(this.maxNameLength)]);
    }

    if (email) {
      formFields[email] = new FormControl('', [Validators.required, Validators.email]);
    }

    if (password && passwordConfirm) {
      formFields.passwords = new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(this.minPassword)]),
        passwordConfirm: new FormControl('', [Validators.required]),
      }, this.MatchPassword);
    }

    // formFields.submit = new FormControl('', this.formValid);

    // userForm.statusChanges.subscribe(data => {
    //   this.formValid(userForm);
    //   if (userForm['FormIsOK']) {
    //     return userForm['buttonDisabled'] = null;
    //   } else {
    //     return userForm['buttonDisabled'] = 'disabled';
    //   }
    // });
    return new FormGroup(formFields);
  }
}
