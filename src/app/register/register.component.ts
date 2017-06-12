import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/Rx';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  postResponse: String;
  registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl()
  })

  constructor(private http: Http, private router: Router) { 
    if (localStorage.getItem('token') !== null) {
      this.router.navigate(['./']);
    }
  }

  onRegister() {
    var data = 'username=' + this.registerForm.value.username +
    '&password=' + this.registerForm.value.password +
    '&firstName=' + this.registerForm.value.firstName +
    '&lastName=' + this.registerForm.value.lastName;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/it255/metHotels/registerservice.php', data, {headers: headers})
    .map(res => res)
    .subscribe(
      data => {
        let obj = JSON.parse(data["_body"]);
        localStorage.setItem('token', obj.token);
        this.router.navigate(['./']);
      }
    );
  }

}
