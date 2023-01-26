import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule, FontAwesomeModule, IonicModule
  ],
  exports: [MapComponent]
})
export class MapModule { }
