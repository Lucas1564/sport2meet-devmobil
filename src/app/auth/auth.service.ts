import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject, Observable, from } from "rxjs";
import { map, delayWhen } from "rxjs/operators";
import { Storage } from "@ionic/storage";
import jwt_decode from 'jwt-decode';
import { environment } from "../../environments/environment";

import { AuthResponse } from "../models/auth-response";
import { AuthRequest } from "../models/auth-request";

/**
 * Authentication service for login/logout.
 */
@Injectable({ providedIn: "root" })
export class AuthService {
  #auth$: ReplaySubject<AuthResponse | undefined>;

  constructor(private http: HttpClient, private storage: Storage) {
    this.#auth$ = new ReplaySubject(1);
    this.storage.get('token').then((auth) => {
      // Emit the loaded value into the observable stream.
      this.#auth$.next(auth);
    });
  }

  isAuthenticated$(): Observable<boolean> {
    return this.#auth$.pipe(map((auth) => Boolean(auth)));
  }

  getToken$(): Observable<string> {
    return this.#auth$.pipe(map((auth) => auth?.token ?? ""));
  }

  logIn$(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, authRequest).pipe(
      delayWhen((authRequest) => this.saveAuth$(authRequest)),
      map((authResponse) => {
        this.#auth$.next(authResponse);
        const token = this.getDecodedAccessToken(authResponse.token); // decode token
        console.log("User " + token.sub + " logged in");
        return authResponse;
      })
    );
  }

  logOut(): void {
    this.#auth$.next(undefined);
    this.storage.remove('token');
    console.log("User logged out");
  }

  private saveAuth$(auth: AuthResponse): Observable<void> {
    const tokenInfo = this.getDecodedAccessToken(auth.token); // decode token
    this.storage.set('expireDate', tokenInfo.exp);
    this.storage.set('userId', tokenInfo.sub);
    return from(this.storage.set('token', auth.token));
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

}