import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route:Router,private auths:AuthService,private af:AngularFireAuth) {}

  logout(){
    console.log("Fuera del sistema")
    this.af.auth.signOut()
    this.route.navigateByUrl("/login")
  }
}
