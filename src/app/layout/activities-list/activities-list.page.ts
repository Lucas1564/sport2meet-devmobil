import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.page.html',
  styleUrls: ['./activities-list.page.scss'],
})
export class ActivitiesListPage implements OnInit {
  faFilter = faFilter;
  activities?: Activity[];

  constructor(private activityService: ActivityService, private router: Router) { }

  ngOnInit() {
    this.activityService.getAll().subscribe(activities => this.activities = activities);
  }

  onChange(){
    this.activityService.getAll().subscribe(activities => this.activities = activities);
  }

}
