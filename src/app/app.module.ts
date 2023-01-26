import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from "@ionic/storage-angular";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormAddActivityComponent } from './form-add-activity/form-add-activity.component';


const routes: Routes = [
  //{ path: 'activities-list', component: ActivitiesListComponent },
  { path: 'form-add-activity', component: FormAddActivityComponent },
  { path: '', redirectTo: '/activities-list', pathMatch: 'full' }
];


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, HttpClientModule, FontAwesomeModule, RouterModule.forRoot(routes)],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent],
  exports:[RouterModule, IonicModule]
})
export class AppModule { }

