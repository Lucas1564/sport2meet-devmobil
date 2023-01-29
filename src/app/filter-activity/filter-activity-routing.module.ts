import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterActivityPage } from './filter-activity.page';

const routes: Routes = [
  {
    path: '',
    component: FilterActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterActivityPageRoutingModule {}
