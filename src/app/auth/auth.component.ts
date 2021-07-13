import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Data, Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  login: string = '';
  password: string = '';
  err: string = '';

  constructor(private router: Router , private api: ApiService, private svc: DataService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/']);
    }
  }

  submit() {
    this.err = '';
    this.api.login(this.login, this.password).subscribe((data: any) => {
      this.svc.setLogin(data.login);
      this.api.saveToken(data.token);
      this.router.navigate(['/']);
    },(err:HttpErrorResponse)=> {
      this.err = err.error.message;
    })
  }
}
