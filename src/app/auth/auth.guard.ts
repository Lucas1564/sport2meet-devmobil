import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map } from "rxjs/operators";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private storage: Storage) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if getStorage() is not null
    if (await this.checkToken() != null && await this.checkExpDate() > Date.now() / 1000) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  async checkToken() {
    const result = await this.storage.get('token');
    return result;
  }

  async checkExpDate() {
    const expireDate = await this.storage.get('expireDate');
    return expireDate;
  }


}