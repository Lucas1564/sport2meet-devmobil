import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { UserService } from "src/app/services/user.service";
import { User } from 'src/app/models/user';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  user?: User;

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router,
    private storage: Storage
  ) { }

  async ngOnInit() {
    this.user = await this.storage.get('userId')
    this.userService.getUserByID(this.user)
    console.log(this.userService.getUserByID(this.user))
  }

  // Add a method to log out.
  logOut() {
    console.log("logging out...");
    this.auth.logOut();
    this.router.navigateByUrl("/");
  }
}
