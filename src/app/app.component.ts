import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:[ './app.component.css' ]
})

export class AppComponent {
    title:string;
    hometext:string;
    contacttext:string;
    constructor() {
      this.title="Application Develop using Angular 8";
      this.hometext="Home";
      this.contacttext="Contact Us";
    }
}