import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesMapPage } from './activities-map.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesMapPageRoutingModule {}
