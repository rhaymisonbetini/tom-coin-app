import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneDireactive } from './phone.directive';



@NgModule({
  declarations: [
    PhoneDireactive
  ],

  exports: [
    PhoneDireactive
  ],

  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
