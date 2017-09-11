import { KeyValuePipe } from './../../pipes/key-value.pipe';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { UserAuthService } from './../../services/user-auth.service';
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let userService;
  let userAuthService;
  let router;
  let userForm;
  let formValidation;
  let setUser = false;
  let calledFunctionsCount = 0;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent, KeyValuePipe],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    userAuthService = {
      isLogged: () => {
        return true;
      },
      setLoggedUser: (user: User) => {
        return false;
      }
    };

    userForm = {
      statusChanges: {
        subscribe: () => {
          setUser = true;
        }
      }
    };

    userService = {
      registerUser: (user: User) => {
        return {
          map: () => {
            return {
              subscribe: () => {
                setUser = true;
              }
            };
          }
        };
      },
      updateUserDetails: () => {
        return {
          map: () => {
            return {
              subscribe: () => {
                setUser = true;
              }
            };
          }
        };
      },
      getUserDetails: () => {
        return {
          map: () => {
            return {
              subscribe: () => {
                calledFunctionsCount++;
              }
            };
          }
        };
      },
      getUserCurrencies: () => {
        return {
          map: () => {
            return {
              subscribe: () => {
                calledFunctionsCount++;
              }
            };
          }
        };
      }
    };

    router = {
      navigateByUrl: () => {
        return '/';
      }
    };

    formValidation = {
      formValidation: () => {
        return userForm;
      },
      submitButtonValidation: () => {
        return true;
      }
    };

    component = new ProfileComponent(router, userService, userAuthService, formValidation);
  });

  it('expect to be created', () => {
    expect(component).toBeTruthy();
  });

  it('expect isLogged to be called on init', () => {
    spyOn(userAuthService, 'isLogged');
    component.ngOnInit();

    expect(userAuthService.isLogged).toHaveBeenCalledTimes(1);
  });

  it('expect updateUserDetails to be executed when calling profileUpdate', () => {
    component.updateProfile();

    expect(setUser).toBeTruthy();
  });
});
