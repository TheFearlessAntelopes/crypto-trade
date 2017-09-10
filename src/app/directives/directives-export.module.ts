import { QuantityValidationDirective } from './quantity-validation.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalDirective } from './optional.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    QuantityValidationDirective,
    OptionalDirective,
  ],
  exports: [
    QuantityValidationDirective,
    OptionalDirective
  ]

})
export class DirectivesExportModule { }
