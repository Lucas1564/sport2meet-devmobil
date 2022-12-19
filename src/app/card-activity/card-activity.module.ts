import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardActivityComponent } from './card-activity/card-activity.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CardActivityComponent],
  imports: [
    CommonModule, FontAwesomeModule, IonicModule
  ],
  exports:[CardActivityComponent]
})
export class CardActivityModule { }
