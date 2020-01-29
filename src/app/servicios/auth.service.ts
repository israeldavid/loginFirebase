import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';

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
}
