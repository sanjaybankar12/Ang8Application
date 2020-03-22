import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { DataService } from '../services/data.service';
import { DatabaseService } from '../services/database.service';

import { routingModule } from '../routing.module';
import { UserComponent } from './user/user.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

import { UserPipe } from '../pipes/user.pipe';
import { FiredataComponent } from './firedata/firedata.component';

@NgModule({
  declarations:[AppComponent, FooterComponent, HomeComponent, UserComponent, ContactUsComponent, ForbiddenComponent, UserPipe, FiredataComponent],
  imports:[BrowserModule, HttpClientModule, routingModule, FormsModule,AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule],
  providers:[ DataService, DatabaseService, AngularFirestore ],
  bootstrap:[AppComponent]
})
export class AppModule {

}