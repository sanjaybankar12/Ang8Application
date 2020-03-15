import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { DataService } from '../services/data.service';

import { HttpClientModule } from '@angular/common/http';
import { routingModule } from '../routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations:[AppComponent, FooterComponent, HomeComponent, UserComponent],
  imports:[BrowserModule, HttpClientModule, routingModule],
  providers:[ DataService ],
  bootstrap:[AppComponent]
})
export class AppModule {

}