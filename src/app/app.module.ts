import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { DataService } from '../services/data.service';

import { routingModule } from '../routing.module';
import { UserComponent } from './user/user.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

import { UserPipe } from '../pipes/user.pipe';

@NgModule({
  declarations:[AppComponent, FooterComponent, HomeComponent, UserComponent, ContactUsComponent, ForbiddenComponent, UserPipe],
  imports:[BrowserModule, HttpClientModule, routingModule, FormsModule],
  providers:[ DataService ],
  bootstrap:[AppComponent]
})
export class AppModule {

}