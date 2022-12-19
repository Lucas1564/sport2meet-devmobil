import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardActivityComponent } from './card-activity/card-activity.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [CardActivityComponent],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports:[CardActivityComponent]
})
export class CardActivityModule { }
