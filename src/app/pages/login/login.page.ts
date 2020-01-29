import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: User = { email: '', password: '' };
  passwordShown = false;
  passwordType = 'password';
  nameIcon = 'eye-off';

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  async validarUsuario(){
    const user = await this.auth.onLogin(this.usuario)
    if (user){
      this.router.navigateByUrl('/admin');
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
