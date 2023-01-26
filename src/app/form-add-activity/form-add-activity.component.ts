import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-add-activity',
  templateUrl: './form-add-activity.component.html',
  styleUrls: ['./form-add-activity.component.scss']
})
export class FormAddActivityComponent implements OnInit {

  // Variables pour stocker les valeurs des champs de formulaire
  activityTitle: string;
  activityDate: Date;
  activityDescription: string;
  activitySport: string;
  activityType: string;
  activityParticipants: number;
  activityAddress: string;
  activityNPA: string;
  activityCity: string;
  
  // tableau des sports disponibles
  sports: string[] = ['Football', 'Dance', 'Basket'];
  
  // tableau des types d'activité disponibles
  types: string[] = ['Entraînement', 'Match', 'Tournoi'];

  constructor(private http: HttpClient) {
    this.activityTitle = 'saa';
    this.activityDate = new Date();
    this.activityDescription = '';
    this.activitySport = '';
    this.activityType = '';
    this.activityParticipants = 0;
    this.activityAddress = '';
    this.activityNPA = '';
    this.activityCity = '';
  }

  ngOnInit() {
  }
  
  // Fonction onclick
  onCreate() {
    console.log('Creating activity:', this.activityTitle);
    // récupère les données du formulaire
    const data = {
      activityTitle: this.activityTitle,
      activityDate: this.activityDate,
      activityDescription: this.activityDescription,
      activitySport: this.activitySport,
      activityType: this.activityType,
      activityParticipants: this.activityParticipants,
      activityAddress: this.activityAddress,
      activityNPA: this.activityNPA,
      activityCity: this.activityCity
    }
    console.log('Data: ', data);
    // envoi les données à l'API
    // this.http.post('https://sport-2-meet.onrender.com/activities', data)
    //     .subscribe(response => {
    //         console.log(response);
    //     }, error => {
    //         console.log(error);
    //     });
  }
}

