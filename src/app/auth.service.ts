import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  user$:Observable<firebase.User>

  constructor(private afAuth:AngularFireAuth,private route:ActivatedRoute) { 
    this.user$=afAuth.authState
  }

    login(){
      let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';  //store return url
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());//authendication for google
    }
logout(){
  this.afAuth.auth.signOut();

}

test(){

  console.log('hello ');

  
}

}
