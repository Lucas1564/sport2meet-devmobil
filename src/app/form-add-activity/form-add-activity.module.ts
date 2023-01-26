import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddActivityComponent } from './form-add-activity.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormAddActivityComponent],
  imports: [
    CommonModule, 
    IonicModule,  
    FormsModule,
    ReactiveFormsModule,
  ],
  
  exports: [FormAddActivityComponent]
})
export class FormAddActivityModule { }
