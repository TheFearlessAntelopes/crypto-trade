import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UserAuthService {

  private cookieName: string;

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

  isLogged() {
    const loggedUser = this.cookieService.check(this.cookieName);
    return loggedUser ? true : false;
  }

  setLoggedUser(username: string) {
    const cookieDate: Date = new Date(2020, 1, 1);
    this.cookieService.set(this.cookieName, username, cookieDate);
  }

  clearUserCookie(): void {
    this.cookieService.delete(this.cookieName);
  }
}
