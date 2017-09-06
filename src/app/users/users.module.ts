import { UserRegistrationValidationService } from './../services/user-registration-validation.service';
import { UsersComponent } from './users.component';
import { RegisterComponent } from './register/register.component';
import { UsersRouterModule } from './users-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    UsersRouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent
  ],
  providers: [
  ]
})
export class UsersModule { }
