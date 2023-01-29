import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterActivityPageRoutingModule } from './filter-activity-routing.module';

import { FilterActivityPage } from './filter-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterActivityPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FilterActivityPage]
})
export class FilterActivityPageModule {}
