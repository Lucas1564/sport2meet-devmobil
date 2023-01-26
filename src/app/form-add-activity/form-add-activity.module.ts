import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddActivityComponent } from './form-add-activity.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [FormAddActivityComponent],
  imports: [
    CommonModule, IonicModule
  ],
  
  exports: [FormAddActivityComponent]
})
export class FormAddActivityModule { }
