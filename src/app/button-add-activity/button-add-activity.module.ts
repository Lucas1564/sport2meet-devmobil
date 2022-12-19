import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddActivityComponent } from './button-add-activity.component'
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ButtonAddActivityComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports:[ButtonAddActivityComponent]
})
export class ButtonAddActivityModule { }
