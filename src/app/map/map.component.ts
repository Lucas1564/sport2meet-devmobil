import { Component, AfterViewInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {

  constructor(private activityService: ActivityService) { }

  ngAfterViewInit(): void {
    this.leafletMap();
  }

  map!: Leaflet.Map;
  watchId: any;
  activities?: Activity[];

  ionViewDidEnter() {
    this.leafletMap();
  }

  async leafletMap() {

    var lat = 0;
    var long = 0;
    //Get current location
    await Geolocation.getCurrentPosition().then((resp) => {
      lat = resp.coords.latitude;
      long = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    //instantiate leaflet map
    this.map = new Leaflet.Map('map').setView([lat, long], 15);

    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);


    const myPosition = Leaflet.icon({
      iconUrl: '../assets/location/location.gif',
      iconSize: [120, 90],
      iconAnchor: [50, 40],
      tooltipAnchor: [10, 0],
    });

    //add marker
    const markPoint = Leaflet.marker([lat, long], { icon: myPosition });
    markPoint.bindTooltip('Vous êtes ici', { permanent: false, direction: 'top' });
    this.map.addLayer(markPoint);

    await Geolocation.watchPosition({}, (position, err) => {
      if (err) {
        console.log(err);
        return;
      }
      //change marker position
      if (position != null) {
        if (position.coords.latitude != null && position.coords.longitude != null) {
          lat = position.coords.latitude;
          long = position.coords.longitude;
        } else {
          lat = 0;
          long = 0;
        }
      }
      markPoint.setLatLng([lat, long]);
    });

    this.activityService.getAll().subscribe(activities => {
      this.activities = activities;
      this.activities.forEach(activity => {
        const activityMarker = Leaflet.icon({
          iconUrl: 'https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-vector-location-icon-free-and-png-png-image_5708678.png',
          iconSize: [41, 41],
          iconAnchor: [20, 20],
          popupAnchor: [0, 0],
        });
        const marker = Leaflet.marker([activity.location.coordinates[0], activity.location.coordinates[1]], { icon: activityMarker });
        var date = new Date(activity.datetime);
        marker.bindPopup("<b>" + activity.sport + "</b><br>" + activity.description + "<br>" + activity.address + "<br>" + date.toLocaleString());
        this.map.addLayer(marker);
      });
    });

  }


  ionViewWillLeave() {
    this.map.remove();
  }

}
