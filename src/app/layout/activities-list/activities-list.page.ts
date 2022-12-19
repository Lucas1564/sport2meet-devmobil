import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.page.html',
  styleUrls: ['./activities-list.page.scss'],
})
export class ActivitiesListPage implements OnInit {
  faFilter = faFilter;

  constructor() { }

  ngOnInit() {
  }

}
