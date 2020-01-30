import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogueado: any = false;
  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.estaLogueado = user))
  }

  //async
  async onLogin(user: User) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    } catch (error) {
      console.log("error on login: ", error)
    }
  }
    //register
    async onRegistro(user:User){
      try {
        return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      } catch (error) {
        console.log("error en el Registro: ", error)
      }
    }

    // Sign in with Google
    GoogleAuth() {
      return this.AuthLogin(new auth.GoogleAuthProvider());
    }  

    // Auth logic to run auth providers
    AuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {

        console.log('Ingresaste Correctamente!',result)
    }).catch((error) => {
        console.log(error)
    })
  }
}
