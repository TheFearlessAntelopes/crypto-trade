import { User } from './../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { UserAuthService } from './../services/user-auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let userAuth;
  let component: NavigationComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      // providers: [
      //   {provider: UserAuthService, useValue: userAuth },
      // ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    userAuth = {
      isLogged: () => {
        return 'true';
      },
      getLoggedUser: () => {
        return new User();
      }
    };

    component = new NavigationComponent(userAuth);

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // it('should call userAuthService on init', () => {
  //   spyOn(userAuth, 'isLogged');
  //   component.ngOnInit();

  //   expect(userAuth).toHaveBeenCalledTimes(1);
  // });
});
