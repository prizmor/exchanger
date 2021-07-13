import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  login: any = null;

  constructor(private router: Router , private api: ApiService) { }

  setLogin(login: string): void {
    this.login = login;
    localStorage.setItem('login', JSON.stringify(login));
  }

}
