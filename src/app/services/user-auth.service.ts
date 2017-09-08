import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UserAuthService {

  private cookieName: string;
  private loggedUser: User;

  constructor(private cookieService: CookieService) {
    this.cookieName = 'crypto-trade-project';
  }

  getLoggedUser(): string {
    const username: string = this.cookieService.get(this.cookieName);
    if (!username) {
      return undefined;
    }

    return username;
  }

  getLoggedUserDetails(): User {
    const user = this.loggedUser;
    return user;
  }

  isLogged() {
    const loggedUser = this.cookieService.check(this.cookieName);
    return loggedUser ? true : false;
  }

  setLoggedUser(user: User) {
    const cookieDate: Date = new Date(2020, 1, 1);
    this.cookieService.set(this.cookieName, user.username, cookieDate);
    this.loggedUser = user;
  }

  clearUserCookie(): void {
    this.cookieService.delete(this.cookieName);
    this.loggedUser = null;
  }
}
