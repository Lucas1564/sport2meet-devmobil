import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddActivityComponent } from './button-add-activity.component'



@NgModule({
  declarations: [ButtonAddActivityComponent],
  imports: [
    CommonModule
  ],
  exports:[ButtonAddActivityComponent]
})
export class ButtonAddActivityModule { }
