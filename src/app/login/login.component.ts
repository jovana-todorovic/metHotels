import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private http: Http, private router: Router) {
    if (localStorage.getItem('token') !== null) {
      this.router.navigate(['./']);
    }
  }

  onLogin() {
    let data = "username=" + this.loginForm.value.username +
    "&password=" + this.loginForm.value.password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/it255/metHotels/loginservice.php', data, {headers: headers})
    .map(res => res)
    .subscribe( data => {
      let obj = JSON.parse(data["_body"]);
      localStorage.setItem('token', obj.token);
      this.router.navigate(['./']);
    });
  }


}
