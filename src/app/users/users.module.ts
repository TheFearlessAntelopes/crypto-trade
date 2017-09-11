import { ToastrCustomOptions } from './../models/toastr-custom-options';
import { ToastrService } from './../services/toastr.service';
import { KeyValuePipe } from './../pipes/key-value.pipe';
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
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

@NgModule({
  imports: [
    ReactiveFormsModule,
    UsersRouterModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  declarations: [
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    KeyValuePipe
  ],
  providers: [ToastrService, { provide: ToastOptions, useClass: ToastrCustomOptions }]
})
export class UsersModule { }
