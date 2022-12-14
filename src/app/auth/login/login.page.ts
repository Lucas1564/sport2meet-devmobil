import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { faHand } from "@fortawesome/free-solid-svg-icons";

import { AuthService } from "../auth.service";
import { AuthRequest } from "../../models/auth-request";

/**
 * Login page.
 */
@Component({
  templateUrl: "login.page.html",
})
export class LoginPage {
  faHand = faHand;
  /**
   * This authentication request object will be updated when the user
   * edits the login form. It will then be sent to the API.
   */
  authRequest: AuthRequest;

  /**
   * If true, it means that the authentication API has return a failed response
   * (probably because the name or password is incorrect).
   */
  loginError = false;

  returnUrl = "/";


  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
    this.authRequest = {
      email: "",
      password: "",
    };

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /**
   * Called when the login form is submitted.
   */
  onSubmit(form: NgForm) {
    // Do not do anything if the form is invalid.
    if (form.invalid) {
      return;
    }

    // Hide any previous login error.
    this.loginError = false;

    // Perform the authentication request to the API.
    this.auth.logIn$(this.authRequest).subscribe({
      next: () => {
        //delete / from the returnUrl
        this.returnUrl = this.returnUrl.replace("/", "");
        this.router.navigate([this.returnUrl]);
      },
      error: (err) => {
        this.loginError = true;
        console.warn(`Authentication failed: ${err.message}`);
      },
    });
  }
}