import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { User } from '../model/user.model';

@Injectable({
    providedIn:"root"
})
export class DatabaseService {

    constructor(private firestore:AngularFirestore) {
        this.firestore.collection("users");
    }

    addUser(user:User) {
        return this.firestore.collection("users").add(user);
    }

}