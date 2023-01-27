import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
  }
  getUserByID(idUser: User | undefined): Observable<User[]>{
    console.log('https://sport-2-meet.onrender.com/users/id/'+ idUser)
    return this.http.get<User[]>('https://sport-2-meet.onrender.com/users/id/'+ idUser);
  }
}
