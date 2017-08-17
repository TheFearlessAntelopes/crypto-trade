import { UserAuthService } from './../services/user-auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, DoCheck {

  public isUserLogged: boolean;
  public loggedUserUsername: string;

  constructor(private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.isUserLogged = this.userAuthService.isLogged();
    this.loggedUserUsername = this.userAuthService.getLoggedUser();
  }

  ngDoCheck() {
    this.isUserLogged = this.userAuthService.isLogged();
    this.loggedUserUsername = this.userAuthService.getLoggedUser();
  }

}
