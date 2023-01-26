import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Activity } from 'src/app/models/activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  faCalendar = faCalendar;
  faLocationDot = faLocationDot;
  faUser = faUser;
  faClock = faClock;
  activity?: Activity;

  ionViewDidEnter() {
    this.activity = history.state.activity;
    if (this.activity == undefined) {
      this.router.navigate(['/activities-list']); 
    }
  }


}
