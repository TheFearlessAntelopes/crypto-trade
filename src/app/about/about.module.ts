import { AboutRouterModule } from './about-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { MdCardModule, } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AboutRouterModule,
    MdCardModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
