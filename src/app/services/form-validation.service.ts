import { FormGroup, ValidatorFn, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class FormValidationService {
  private namePattern = '^[a-zA-Z]+( [a-zA-Z]+)*$';
  public readonly minPassword = 4;

  constructor() { }
  public MatchPassword(group: FormGroup): ValidatorFn {
    const password = group.get('password').value; // to get value in input tag
    const confirmPassword = group.get('passwordConfirm').value; // to get value in input tag
    if (password !== confirmPassword) {
      group['passwordsMatch'] = false;
    } else {
      group['passwordsMatch'] = true;
      return null;
    }
  }
  public formValid(group: FormGroup): ValidatorFn {
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
  }

  public formValidation(
    userForm: FormGroup,
    username?: PropertyKey,
    firstName?: PropertyKey,
    lastName?: PropertyKey,
    email?: PropertyKey,
    password?: PropertyKey,
    passwordConfirm?: PropertyKey,
  ) {
    const formFields: { passwords?: FormGroup, submit?: FormControl } = {};

    if (username) {
      formFields[username] = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]);
    }

    if (firstName) {
      formFields[firstName] = new FormControl('', [Validators.pattern(this.namePattern)]);
    }

    if (lastName) {
      formFields[lastName] = new FormControl('', [Validators.pattern(this.namePattern)]);
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

    formFields.submit = new FormControl('', this.formValid);

    userForm = new FormGroup(formFields);
    userForm.statusChanges.subscribe(data => {
      this.formValid(userForm);
      if (userForm['FormIsOK']) {
        return { disabled: null };
      } else {
        return { disabled: 'disabled' };
      }
    });
    return userForm;
  }
}
