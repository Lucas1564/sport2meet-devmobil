import { Component, Input, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Activity } from 'src/app/models/activity';
import { Storage } from "@ionic/storage";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.scss'],
})
export class CardActivityComponent implements OnInit {

  user!: string;
  token!: string;

  @Input() activity?: Activity;
  faCalendar = faCalendar;
  faLocationDot = faLocationDot;



  constructor(private storage: Storage,private http: HttpClient,private alertController: AlertController,private router: Router,) {

  }

  async ngOnInit() {
    this.user = await this.storage.get('userId');
    this.token = await this.storage.get('token');
  }

  deleteActivity(activity: Activity) {
    console.log(activity._id);
    //add token to header
    const headers = { 'Authorization': 'Bearer ' + this.token };
    //confirm delete
    this.alertController.create({
      header: 'Delete activity',
      message: 'Are you sure you want to delete this activity?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.http.delete(environment.apiUrl + '/activities/id/' + activity._id, { headers }).subscribe((res) => {
              const alert = this.alertController.create({
                header: 'Activity deleted',
                message: 'The activity has been deleted',
                buttons: ['OK']
              });
              alert.then(alert => alert.present());
              this.router.navigateByUrl('/activities-list');
            }, (err) => {
              const alert = this.alertController.create({
                header: err.status,
                message: err.statusText,
                buttons: ['OK']
              });
              alert.then(alert => alert.present());
              console.log(err);
            });
            this.router.navigateByUrl('/activities-list');
          }
        }
      ]
    }).then(alert => alert.present());
  }

  modifyActivity(activity: Activity) {
    console.log(activity);
    //navigate to form-update-activity
    this.router.navigate(['/form-update-activity'], { state: { activity } });
  }

  viewActivity(activity: Activity) {
    console.log(activity);
    this.router.navigate(['/activities-list/activity'], { state: { activity } });
  }
}

