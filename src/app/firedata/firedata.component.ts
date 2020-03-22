import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../../services/database.service';
import { User } from '../../model/user.model';
import { isNumber } from 'util';

import { Router } from '@angular/router';

@Component({
  selector: 'app-firedata',
  templateUrl: './firedata.component.html',
  styleUrls: ['./firedata.component.css']
})
export class FiredataComponent implements OnInit {

  user:User;
  name:string;
  occupation:string;
  age:number;
  hobby:string;
  constructor(private databaseService:DatabaseService, private router:Router) { }

  ngOnInit() {
  }

  addUserDetails():void {
      if(!this.name || !this.occupation || !this.age || isNaN(this.age) || !this.hobby) {
          return;
      }     

      this.user = {"name":this.name, "occupation":this.occupation, "age":this.age, "hobby":this.hobby};
      console.log(this.user);    
      this.databaseService.addUser(this.user);
      this.initData();
  }

  initData() {
    this.name = "";
    this.occupation = "";
    this.age = 18;
    this.hobby = "";
  }

}
