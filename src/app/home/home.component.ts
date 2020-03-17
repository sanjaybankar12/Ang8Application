import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
    selector:"app-home",
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

    users:any[];
    searchVal:string;
    constructor(private dataService:DataService) {

    }

    ngOnInit() {
        this.dataService.getUsers().subscribe((nextVal:any[]) => this.users = nextVal);
    }

    applyAscSort():void {
        this.users = this.users.sort((a,b) => a.name < b.name ? -1 : 1);
    }

    applyDescSort():void {
        this.users = this.users.sort((a,b) => a.name > b.name ? -1 : 1);
    }
}