import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitiesListPageRoutingModule } from './activities-list-routing.module';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ActivitiesListPage } from './activities-list.page';
import { MainButtonModule } from 'src/app/main-button/main-button.module';
import { CardActivityModule } from 'src/app/card-activity/card-activity.module';
import { ButtonAddActivityModule } from 'src/app/button-add-activity/button-add-activity.module';
import { FormAddActivityModule } from 'src/app/form-add-activity/form-add-activity.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainButtonModule,
    ActivitiesListPageRoutingModule,
    CardActivityModule,
    FontAwesomeModule,
    ButtonAddActivityModule,
    FormAddActivityModule
  ],
  declarations: [ActivitiesListPage]
})
export class ActivitiesListPageModule {}
