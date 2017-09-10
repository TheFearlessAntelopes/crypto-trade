import { TrimStringPipe } from './../pipes/trim-string.pipe';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home-router.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule
  ],
  declarations: [HomeComponent, TrimStringPipe]
})
export class HomeModule { }
