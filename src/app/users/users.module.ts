import { RegisterComponent } from './register/register.component';
import { UsersRouterModule } from './users-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    UsersRouterModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
  ]
})
export class UsersModule { }
