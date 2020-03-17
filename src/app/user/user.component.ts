import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId:number;
  user:any;
  constructor(private routes:ActivatedRoute, private dataService:DataService) {
    this.routes.params.subscribe((nextVal:any) => this.userId = nextVal.id);
   }

  ngOnInit() {
      this.dataService.getUser(this.userId).subscribe((nextVal:any) => this.user = nextVal);
  }

}
