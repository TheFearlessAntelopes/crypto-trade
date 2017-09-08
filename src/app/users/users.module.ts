import { UserAuthService } from './../services/user-auth.service';
import { SharedModule } from './../shared/shared.module';
import { UserRegistrationValidationService } from './../services/user-registration-validation.service';
import { UsersComponent } from './users.component';
import { RegisterComponent } from './register/register.component';
import { UsersRouterModule } from './users-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    UsersRouterModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent
],
  providers: [
  ]
})
export class UsersModule { }
