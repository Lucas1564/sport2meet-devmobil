import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>('https://sport-2-meet.onrender.com/activities');
  }

  getActivityByUser(token: string): Observable<Activity[]> {
    const headers = { 'Authorization': 'Bearer ' + token };
    return this.http.get<Activity[]>('https://sport-2-meet.onrender.com/userActivity/user', { headers });
  }

  getfilteredActivities(sport: string, type: string): Observable<Activity[]> {
    console.log(sport);
    if (sport == 'Tous' && type == 'Tous') {
      return this.http.get<Activity[]>('https://sport-2-meet.onrender.com/activities');
    } else if (sport == 'Tous') {
      return this.http.get<Activity[]>('https://sport-2-meet.onrender.com/activities?type=' + type);
    } else if (type == 'Tous') {
      return this.http.get<Activity[]>('https://sport-2-meet.onrender.com/activities?sport=' + sport);
    } else {
      return this.http.get<Activity[]>('https://sport-2-meet.onrender.com/activities?sport=' + sport + '&type=' + type);
    }
  }

}
