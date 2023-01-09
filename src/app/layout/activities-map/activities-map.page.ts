import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';
import { shadow } from '@ionic/core/dist/types/utils/transition/ios.transition';

@Component({
  selector: 'app-activities-map',
  templateUrl: './activities-map.page.html',
  styleUrls: ['./activities-map.page.scss'],
})
export class ActivitiesMapPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  map!: Leaflet.Map;

  ionViewDidEnter() {
    this.leafletMap();
  }

  async leafletMap() {

    var lat = 12.972442;
    var long = 77.594563;
    //Get current location
    await Geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      lat = resp.coords.latitude;
      long = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    //instantiate leaflet map
    this.map = new Leaflet.Map('mapId2').setView([lat, long], 15);

    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);


    const myPosition = Leaflet.icon({
      iconUrl: 'assets/location/location.gif',
      iconSize: [120, 90],
      iconAnchor: [50, 40],
      popupAnchor: [10, 0]
    });

    //add marker
    const markPoint = Leaflet.marker([lat, long], { icon: myPosition });
    markPoint.bindPopup('<p>Votre localisation</p>');
    this.map.addLayer(markPoint);
  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
