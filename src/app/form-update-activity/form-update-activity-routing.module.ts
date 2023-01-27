import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormUpdateActivityPage } from './form-update-activity.page';

const routes: Routes = [
  {
    path: '',
    component: FormUpdateActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormUpdateActivityPageRoutingModule {}
