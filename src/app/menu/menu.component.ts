import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public svc: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  profile(): void {
    this.router.navigate(['/profile']);
  }

}
