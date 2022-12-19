import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitiesListPageRoutingModule } from './activities-list-routing.module';

import { ActivitiesListPage } from './activities-list.page';
import { MainButtonModule } from 'src/app/main-button/main-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainButtonModule,
    ActivitiesListPageRoutingModule
  ],
  declarations: [ActivitiesListPage]
})
export class ActivitiesListPageModule {}
