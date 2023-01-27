import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormUpdateActivityPageRoutingModule } from './form-update-activity-routing.module';

import { FormUpdateActivityPage } from './form-update-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormUpdateActivityPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormUpdateActivityPage]
})
export class FormUpdateActivityPageModule {}
