import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input("home") home:string;
  @Input("contactus") contactus:string;
  @Input("firedata") firedata:string;
  constructor() { }

  ngOnInit() {
  }

}
