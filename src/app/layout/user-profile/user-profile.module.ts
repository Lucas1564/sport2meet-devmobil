import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile.page';
import { MainButtonModule } from 'src/app/main-button/main-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainButtonModule,
    UserProfilePageRoutingModule
  ],
  declarations: [UserProfilePage]
})
export class UserProfilePageModule { }
