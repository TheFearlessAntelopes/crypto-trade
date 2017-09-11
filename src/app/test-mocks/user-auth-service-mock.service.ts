import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthServiceMockService {

  private user: User = new User();
  
  constructor() { }

  getLoggedUser(): string {
    return 'lllevski';
  }

  getLoggedUserDetails(): User {
    return this.user;
  }

  isLogged() {
    return true;
  }

  setLoggedUser(user: User) {
    this.user = user;
  }

  clearUserCookie(): void {
    this.user = new User();
  }
}
