import { Component, OnInit,AfterViewInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.page.html',
  styleUrls: ['./activities-list.page.scss'],
})
export class ActivitiesListPage implements AfterViewInit {
  faFilter = faFilter;
  activities?: Activity[];

  constructor(private activityService: ActivityService, private router: Router) { }

  ngAfterViewInit(): void {

    // if query params are set, filter the activities
    if (this.router.url.includes('?')) {
      const urlParams = new URLSearchParams(window.location.search);
      var sport = urlParams.get('sport');
      var type = urlParams.get('type');
      if (sport == null || sport == undefined) {
        sport = 'Tous';
      } else if (type == null || type == undefined) {
        type = 'Tous';
      }
      this.activityService.getfilteredActivities(sport, "Tous").subscribe( activities => {
        this.activities = activities;
      });
      console.log(sport);
    } else {
    this.activityService.getAll().subscribe(activities => this.activities = activities);
    }
  }

  onChange(){
    if (this.router.url.includes('?')) {
      const urlParams = new URLSearchParams(window.location.search);
      var sport = urlParams.get('sport');
      var type = urlParams.get('type');
      if (sport == null || sport == undefined) {
        sport = 'Tous';
      } else if (type == null || type == undefined) {
        type = 'Tous';
      }
      this.activityService.getfilteredActivities(sport, "Tous").subscribe( activities => {
        this.activities = activities;
      });
      console.log(sport);
    } else {
    this.activityService.getAll().subscribe(activities => this.activities = activities);
    }
  }

  ionViewWillEnter() {
    this.onChange();
  }

  ionViewDidEnter() {
    this.onChange();
  }

  ionViewchanged() {
    this.onChange();
  }

  ionViewDidLoad() {
    this.onChange();
  }
  
}
