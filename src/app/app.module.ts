import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
import { HttpRequesterOptionsFactoryService } from './services/http-requester-options-factory.service';
import { HttpRequesterService } from './services/http-requester.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './users/register/register.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpModule,
    UsersModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ])
  ],
  providers: [
    HttpRequesterService,
    HttpRequesterOptionsFactoryService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
