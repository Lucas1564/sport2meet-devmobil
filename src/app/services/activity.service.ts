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

}
