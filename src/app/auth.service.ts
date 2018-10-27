import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { DomainService } from './domain.service';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient, private _router: Router, private _domainService: DomainService) { }

  private _domainUrl = this._domainService.getDomainUrl();
  private _registerUrl = this._domainUrl + "api/register";
  private _loginUrl = this._domainUrl + "api/login";

  registerUser(user) {
    return this._http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this._http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
