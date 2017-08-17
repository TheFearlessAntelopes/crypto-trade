import { RegisterComponent } from './register/register.component';
import { UsersRouterModule } from './users-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule } from '@angular/material';

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
    RegisterComponent
  ],
  providers: [
  ]
})
export class UsersModule { }
