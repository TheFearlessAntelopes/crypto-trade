import { FormsModule } from '@angular/forms';
import { User } from './../../models/user.model';
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, OnInit } from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component;
  let userService;
  let userAuthService;
  let router;
  let setUser = false;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    userAuthService = {
      isLogged: () => {
        return false;
      },
      setLoggedUser: (user: User) => {
        return true;
      }
    };

    userService = {
      loginUser: (user: User) => {
        return {
          map: () => {
            return {
              subscribe: () => {
                setUser = true;
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

    component = new LoginComponent(userService, userAuthService, router);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect to call authService isLogged on init', () => {
    spyOn(userAuthService, 'isLogged');
    component.ngOnInit();

    expect(userAuthService.isLogged).toHaveBeenCalledTimes(1);
  });

  it('expect authService to return false when isLogged is called', () => {
    component.ngOnInit();

    expect(userAuthService.isLogged()).toBeFalsy();
  });

  it('expect loginUser to be called on submit of form', () => {
    component.onSubmit();

    expect(setUser).toBeTruthy();
  });
});
