import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private crypto: CryptoService, private router: Router) { }

  userCredentials = {
    email: '',
    pass: ''
  }

  encryptUser() {
    
  }

  ngOnInit(): void {
  }

  login(){
    const payload = this.crypto.encrypt(this.userCredentials)
    this.auth.loginUser(payload).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.jwtToken);
        this.router.navigate(['/consultas']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  irConsultas(){
    this.router.navigate(['/consultas'])
  }

}
