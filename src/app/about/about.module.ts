import { AboutRouterModule } from './about-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRouterModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
