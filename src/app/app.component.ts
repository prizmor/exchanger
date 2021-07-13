import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, public svc: DataService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/auth']);
    } else {
      this.svc.login = JSON.parse(<string>localStorage.getItem('login'));
    }
  }

}
