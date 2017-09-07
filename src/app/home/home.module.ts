import { TrimStringPipe } from './../pipes/trim-string.pipe';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home-router.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRouterModule
  ],
  declarations: [HomeComponent, TrimStringPipe]
})
export class HomeModule { }
