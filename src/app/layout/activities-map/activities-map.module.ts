import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitiesMapPageRoutingModule } from './activities-map-routing.module';
import { MapModule } from 'src/app/map/map.module';

import { ActivitiesMapPage } from './activities-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapModule,
    ActivitiesMapPageRoutingModule
  ],
  declarations: [ActivitiesMapPage]
})
export class ActivitiesMapPageModule { }
