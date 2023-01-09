import { Component, Input, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.scss'],
})
export class CardActivityComponent implements OnInit {
  @Input() activity?: Activity;
  faCalendar = faCalendar;
  faLocationDot = faLocationDot;



  constructor() {

  }

  ngOnInit() {
  }



}

