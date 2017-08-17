import { UsersComponent } from './users.component';
import { RegisterComponent } from './register/register.component';
import { UsersRouterModule } from './users-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
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
