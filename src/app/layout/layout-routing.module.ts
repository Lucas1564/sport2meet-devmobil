import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    // Default route
    path: "",
    component: LayoutPage,
    children: [
      {

        path: "activities-list",
        loadChildren: () =>
          import('./activities-list/activities-list.module').then(
            (m) => m.ActivitiesListPageModule
          ),
      },
      {

        path: 'activities-map',
        loadChildren: () =>
          import('./activities-map/activities-map.module').then(
            (m) => m.ActivitiesMapPageModule
          ),
      },
      {

        path: "user-profile",
        loadChildren: () =>
          import('./user-profile/user-profile.module').then(
            (m) => m.UserProfilePageModule
          ),
      },
      {
        path: "",
        redirectTo: "activities-map",
        pathMatch: "full",
      },
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
