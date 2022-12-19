import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.scss'],
})
export class CardActivityComponent implements OnInit {
  faCalendar = faCalendar;
  faLocationDot = faLocationDot;

  constructor() { }

  ngOnInit() {}

}
