import { RegisterComponent } from './register/register.component';
import { UsersRouterModule } from './users-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UsersRouterModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
  ]
})
export class UsersModule { }
