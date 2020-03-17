import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent implements OnInit {

  name:string;
  email:string;
  phone:string;
  address:string;
  constructor() { }

  ngOnInit() {
    this.name = "Sanjay Bankar";
    this.email = "sanjaybankar12@gmail.com";
    this.phone = "9561542499";
    this.address = "Ganga Constella, Kharadi";
  }

}
