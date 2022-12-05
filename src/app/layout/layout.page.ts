import { Component } from "@angular/core";

// Custom type that represent a tab data.
declare type PageTab = {
  title: string; // The title of the tab in the tab bar
  icon: string; // The icon of the tab in the tab bar
  path: string; // The route's path of the tab to display
};

@Component({
  selector: "app-layout",
  templateUrl: "layout.page.html",
  styleUrls: ["layout.page.scss"],
})
export class LayoutPage {
  tabs: PageTab[];

  constructor() {
    this.tabs = [
      { title: "Activités", icon: "list", path: "activities-list" },
      { title: "Carte", icon: "map", path: "activities-map" },
      { title: "Profil", icon: "person", path: "user-profile" },
    ];
  }
}