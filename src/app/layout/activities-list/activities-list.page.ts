import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.page.html',
  styleUrls: ['./activities-list.page.scss'],
})
export class ActivitiesListPage implements OnInit {
  faFilter = faFilter;
  activities?: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getAll().subscribe(activities => this.activities = activities);
  }

}
