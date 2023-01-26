import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required),
  });

  constructor(private alertController: AlertController,private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  onSignup() {
    if (this.signupForm.invalid) {
      const alert = this.alertController.create({
        header: 'Erreur',
        message: 'Veuillez remplir tous les champs',
        buttons: ['OK']
      });
      alert.then(alert => alert.present());
      return;
    }

    if (this.signupForm.value.password !== this.signupForm.value.passwordConfirm) {
      const alert = this.alertController.create({
        header: 'Erreur',
        message: 'Les mots de passe ne correspondent pas',
        buttons: ['OK']
      });
      alert.then(alert => alert.present());
      return;
    }

    this.http.post(environment.apiUrl + '/users', this.signupForm.value).subscribe(
      (response) => {
        const alert = this.alertController.create({
          header: 'Succès',
          message: 'Votre compte a bien été créé',
          buttons: ['OK']
        });
        alert.then(alert => alert.present());
        //reset form
        this.signupForm.reset();
        this.router.navigate(['/login']);
      },
      (error) => {
        const alert = this.alertController.create({
          header: 'Erreur',
          message: error.error,
          buttons: ['OK']
        });
        alert.then(alert => alert.present());
        console.log(error);
      }
    );
  }

}
