import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { environment } from "../../environments/environment";
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form-add-activity',
  templateUrl: './form-add-activity.component.html',
  styleUrls: ['./form-add-activity.component.scss']
})
export class FormAddActivityComponent implements OnInit {

  addActivityForm = new FormGroup({
    sport: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    npa: new FormControl('', Validators.required),
    locality: new FormControl('', Validators.required),
    datetime: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    players: new FormControl('', Validators.required)
  });

  
  // tableau des sports disponibles
  sports: string[] = ['Course', 'Vélo', 'Natation', 'Randonnée', 'Ski', 'Football', 'Basketball', 'Tennis', 'Volleyball', 'Baseball', 'Football-American', 'Golf', 'Hockey', 'Rugby', 'Boxe', 'Arts Martiaux', 'Yoga', 'Pilates', 'Dance', 'Fitness', 'Crossfit', 'Autre'];
  
  // tableau des types d'activité disponibles
  types: string[] = ['Événement', 'Tournoi', 'Entraînement', 'Autre'];


  //Date de contrôle pour éviter d'ajouter une activité dans le passé
  date = new Date();
  dateCt = new Date(this.date.getTime() + 2 * 60 * 60 * 1000);
  dateCtrl = this.dateCt.toISOString();


  constructor(private http: HttpClient, private router: Router,private alertController: AlertController) { 
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.addActivityForm.invalid) {
      return;
    }

    this.http.post(environment.apiUrl + '/activities', this.addActivityForm.value).subscribe(
      (response) => {
        const alert = this.alertController.create({
          header: 'Succès',
          message: 'Votre activité a bien été ajoutée',
          buttons: ['OK']
        });
        alert.then(alert => alert.present());
        //reset form
        this.addActivityForm.reset();
        console.log(response);
        this.router.navigate(['/activities-list/activity'], { state: { response } })
        .then(() => {
          window.location.reload();
        });
      },
      (error) => {
        console.log(error);
        const alert = this.alertController.create({
          header: 'Erreur',
          message: error.error,
          buttons: ['OK']
        });
        alert.then(alert => alert.present());
        if (error.status == 401) {
          this.router.navigate(['login'], { queryParams: { returnUrl: '/form-add-activity' } })
        }
      });
  }
  
}

