import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:5000/api';
  options = {headers: {'Content-Type':'application/json; charset=utf-8', 'Authorization':'bearer ' + this.token()}};

  constructor(private http: HttpClient, private router: Router) { }

  saveToken(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
  }
  token(): string {
    return JSON.parse(<string>localStorage.getItem('token'));
  }

  login(login: string, password: string): any {
    return this.http.post<any>(this.baseUrl + '/auth', { login, password }, {headers: {'Content-Type':'application/json; charset=utf-8'}})
  }

  changePassword(login: string, newPassword: string): any {
    return this.http.post<any>(this.baseUrl + '/auth/changePassword', { login, newPassword }, this.options)
  }
}
