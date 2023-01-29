import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivityService } from '../services/activity.service';
import { Activity } from 'src/app/models/activity';
import { Router } from '@angular/router';
import { ActivitiesListPage } from '../layout/activities-list/activities-list.page';

@Component({
  selector: 'app-filter-activity',
  templateUrl: './filter-activity.page.html',
  styleUrls: ['./filter-activity.page.scss'],
})
export class FilterActivityPage implements OnInit {

  filterActivityForm = new FormGroup({
    sport: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  });

  activities?: Activity[];

   // tableau des sports disponibles
   sports: string[] = ['Tous', 'Course', 'Vélo', 'Natation', 'Randonnée', 'Ski', 'Football', 'Basketball', 'Tennis', 'Volleyball', 'Baseball', 'Football-American', 'Golf', 'Hockey', 'Rugby', 'Boxe', 'Arts Martiaux', 'Yoga', 'Pilates', 'Dance', 'Fitness', 'Crossfit', 'Autre'];
  
   // tableau des types d'activité disponibles
   types: string[] = ['Tous','Événement', 'Tournoi', 'Entraînement', 'Autre'];

  constructor(private activityService: ActivityService,private router: Router) { }

  ngOnInit() {
  }

  filter() {
    if (this.filterActivityForm.value.sport === ''  || this.filterActivityForm.value.sport == undefined) {
      this.filterActivityForm.value.sport = 'Tous';
    }
    if (this.filterActivityForm.value.type === '' || this.filterActivityForm.value.type == undefined) {
      this.filterActivityForm.value.type = 'Tous';
    }
    
    //routing vers la page des activité
    this.router.navigate(['/activities-list'], { queryParams: { sport: this.filterActivityForm.value.sport, type: this.filterActivityForm.value.type } })
    .then(() => {
      window.location.reload();
    });
  }

  reset() {
    this.filterActivityForm.reset();
  }

}
