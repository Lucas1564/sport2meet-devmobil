import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ActivityPageRoutingModule } from './activity-routing.module';

import { ActivityPage } from './activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [ActivityPage]
})
export class ActivityPageModule {}
