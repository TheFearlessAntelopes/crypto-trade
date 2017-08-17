import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UsersRouterModule { }
