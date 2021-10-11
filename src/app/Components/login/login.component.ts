import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from '@firebase/auth';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  faGoogle = faGoogle;

  constructor(private afAuth: AngularFireAuth) {


  }

  login() {
    this.afAuth.signInWithPopup(new firebase.GoogleAuthProvider());
  }

}
