import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  isAuth: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe( event => {
      if (localStorage.getItem('token') !== null) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['./']);
    if (localStorage.getItem('token') !== null) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
  }
}
