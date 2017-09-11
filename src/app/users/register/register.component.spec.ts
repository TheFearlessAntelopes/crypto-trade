import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from './../../models/user.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let userService;
  let userAuthService;
  let router;
  let userForm;
  let formValidation;
  let setUser = false;
  let logged = false;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    userAuthService = {
      isLogged: () => {
        return logged;
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

    component = new RegisterComponent(userService, userAuthService, router, formValidation);
  });

  it('expect to be created', () => {
    expect(component).toBeTruthy();
  });

  it('expect authService to be called on init', () => {
    spyOn(userAuthService, 'isLogged');
    component.ngOnInit();

    expect(userAuthService.isLogged).toHaveBeenCalledTimes(1);
  });

  it('expect formValidation to be called when logged is true', () => {
    logged = true;
    component.ngOnInit();

    expect(setUser).toBeTruthy();
  });

  it('expect appRouter to be called when logged is true', () => {
    logged = true;
    spyOn(router, 'navigateByUrl');
    component.ngOnInit();

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
  });
});
