import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Activity } from 'src/app/models/activity';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { Storage } from "@ionic/storage";
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { activityUser } from 'src/app/models/activityUser';
import { EventEmitter, Output } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  @Output() onImageUploaded = new EventEmitter();


  token!: string;


  constructor(private alertController: AlertController,private router: Router,private activityService: ActivityService,private storage: Storage, private http: HttpClient,private actionSheetController: ActionSheetController) { }

  async ngOnInit() {
  }

  faCalendar = faCalendar;
  faLocationDot = faLocationDot;
  faUser = faUser;
  faClock = faClock;
  activity?: Activity;
  aRejoindre = true;
  enCours = false;

  async ionViewDidEnter() {
    this.activity = history.state.activity;
    if (this.activity == undefined) {
      this.router.navigate(['/activities-list']); 
    }
    this.token = await this.storage.get('token');
    if (this.token != undefined) {
      this.activityService.getActivityByUser(this.token).subscribe((data: any) => {
        //for each activity in the list, check if the activity id is the same as the activity id in the url
        data.forEach((activity: activityUser) => {
          console.log(activity);
          if (activity.activity._id == this.activity?._id || this.enCours) {
            this.aRejoindre = false;
            this.enCours = true;
          }else{
            this.aRejoindre = true;
            this.enCours = false;
          }
        });
      });
    }
  }

  joinActivity() {

    //https://sport-2-meet.onrender.com/userActivity/join/idActivity with token in header
    const header  = { 'Authorization': 'Bearer ' + this.token };
    this.http.post('https://sport-2-meet.onrender.com/userActivity/join/' + this.activity?._id, {}, { headers: header }).subscribe(
        (response) => {
          const alert = this.alertController.create({
            header: 'Succès',
            message: 'Vous avez bien rejoint l\'activité',
            buttons: ['OK']
          });
          alert.then(alert => alert.present());
          //reset form
          console.log(response);
          this.aRejoindre = false;
        },
        (error) => {
          if(error.status == 200){
            const alert = this.alertController.create({
              header: 'Succès',
              message: 'Vous avez bien rejoint l\'activité',
              buttons: ['OK']
            });
            alert.then(alert => alert.present());
            this.aRejoindre = false;
            //reset form
          }else{
            const alert = this.alertController.create({
              header: error.status,
              message: error.error,
              buttons: ['OK']
            });
            alert.then(alert => alert.present());
            console.log(error);
            if (error.status == 401) {
              this.router.navigate(['login']);
            }
          }
        });     
  }

  onFileSelected(event: any) {
  }

  async chooseTypePicture() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [
        {
          text: 'Load from Library',
          handler: async () => {
            await this.takePicture(CameraSource.Photos);
          },
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(CameraSource.Camera);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  async takePicture(source: CameraSource) {
    try {
      const permissions = await Camera.requestPermissions();
      console.log(permissions);
    } catch (e) {
      console.log(e);
    }
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)

    const data = image.base64String;
    this.onImageUploaded.emit(data);
  }

  leaveActivity() {
    //https://sport-2-meet.onrender.com/userActivity/leave/idActivity with token in header
    const header  = { 'Authorization': 'Bearer ' + this.token };
    this.http.delete('https://sport-2-meet.onrender.com/userActivity/leave/' + this.activity?._id, { headers: header }).subscribe(
        (response) => {
          const alert = this.alertController.create({
            header: 'Succès',
            message: 'Vous avez bien quitté l\'activité',
            buttons: ['OK']
          });
          alert.then(alert => alert.present());
          //reset form
          console.log(response);
          this.aRejoindre = true;
        },
        (error) => {
          if(error.status == 200){
            const alert = this.alertController.create({
              header: 'Succès',
              message: 'Vous avez bien quitté l\'activité',
              buttons: ['OK']
            });
            alert.then(alert => alert.present());
            this.aRejoindre = true;
            //reset form
          }else{
            const alert = this.alertController.create({
              header: error.status,
              message: error.statusText,
              buttons: ['OK']
            });
            alert.then(alert => alert.present());
            console.log(error);
            if (error.status == 401) {
              this.router.navigate(['login']);
            }
          }
        });     
  }



}
