import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loginUrl = 'https://api.backmerchants.bancoink.biz/qa/login?apiKey=252156';


  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user){
    return this.http.post<any>(this.loginUrl, user)
  }

  

}
