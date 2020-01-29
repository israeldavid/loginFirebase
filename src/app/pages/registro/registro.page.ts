import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { User } from '../../interfaces/user';
import { from } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario: User = { email: '', password: '' };
  passwordShown = false;
  passwordType = 'password';
  nameIcon = 'eye-off';

  constructor(private authServicio:AuthService,private router:Router) { }

  ngOnInit() {
  }

  async onRegistro(){
    const user = await this.authServicio.onRegistro(this.usuario)
    if (user){
      console.log("Exito");
      this.router.navigateByUrl('/home');
    }
  }

  togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
      this.nameIcon = 'eye-off';
    } else {
      this.passwordShown = true;
      this.passwordType = 'text';
      this.nameIcon = 'eye';
    }
  }

}
