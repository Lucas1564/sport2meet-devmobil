import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { environment } from "../../environments/environment";
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Activity } from 'src/app/models/activity';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-form-update-activity',
  templateUrl: './form-update-activity.page.html',
  styleUrls: ['./form-update-activity.page.scss'],
})
export class FormUpdateActivityPage implements OnInit {

  updateActivityForm = new FormGroup({
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

  token!: string;


  //Date de contrôle pour éviter d'ajouter une activité dans le passé
  date = new Date();
  dateCt = new Date(this.date.getTime() + 2 * 60 * 60 * 1000);
  dateCtrl = this.dateCt.toISOString();

  activity?: Activity;


  constructor(private http: HttpClient, private router: Router,private alertController: AlertController,private storage: Storage) { 
  }

  async ngOnInit() {
    //si pas d'activité à modifier, redirection vers la liste des activités
    if (!history.state.activity) {
      this.router.navigate(['/activities-list']);
    }else{
    // Récupération des données de l'activité à modifier via history.state
    this.activity = history.state.activity;
    // Initialisation du formulaire avec les données de l'activité à modifier
    if (this.activity) {
      this.updateActivityForm.patchValue({
        sport: this.activity.sport,
        description: this.activity.description,
        address: this.activity.address,
        npa: this.activity.npa.toString(),
        locality: this.activity.locality,
        datetime: this.activity.datetime,
        type: this.activity.type,
        players: this.activity.players.toString()
      });
    }
    // Récupération du token
    this.token = await this.storage.get('token');
    }
  }

  onSubmit() {
    //add token to header
    const headers = { 'Authorization': 'Bearer ' + this.token };

    if (this.updateActivityForm.invalid) {
      return;
    }
    if (this.activity) {
      this.http.patch(environment.apiUrl + '/activities/id/' + this.activity._id, this.updateActivityForm.value, { headers }).subscribe(
        (response) => {
          const alert = this.alertController.create({
            header: 'Succès',
            message: 'Votre activité a bien été modifiée',
            buttons: ['OK']
          });
          alert.then(alert => alert.present());
          //reset form
          this.updateActivityForm.reset();
          console.log(response);
          this.router.navigate(['/activities-list/activity'], { state: { response } });
        },
        (error) => {
          if(error.statusText == "OK"){
            const alert = this.alertController.create({
              header: 'Succès',
              message: 'Votre activité a bien été modifiée',
              buttons: ['OK']
            });
            alert.then(alert => alert.present());
            //reset form
            this.updateActivityForm.reset();
            this.router.navigateByUrl('/activities-list');
          }else{
            const alert = this.alertController.create({
              header: error.status,
              message: error.statusText,
              buttons: ['OK']
            });
            alert.then(alert => alert.present());
            console.log(error);
            if (error.status == 401) {
              this.router.navigate(['login'], { queryParams: { returnUrl: '/form-add-activity' } });
            }
          }
        }
      );
    }

  }

}
