import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';
import * as firebase from 'firebase/auth'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user!: firebase.UserInfo | null;

  constructor(private afAuth: AngularFireAuth) {

    afAuth.authState.subscribe(x => {
      this.user = x;
    });

  }

  Logout() {
    this.afAuth.signOut()
  }

}
