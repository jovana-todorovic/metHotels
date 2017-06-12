import { Component, Directive } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-getrooms',
  templateUrl: './getrooms.component.html'
})
export class GetroomsComponent {
  private data: Object[];

  constructor(private http: Http, private router: Router) { 
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this.http.get('http://localhost/it255/metHotels/getroomservice.php', {headers: headers})
    .map(res => res.json()).share()
    .subscribe( data => {
      this.data = data.data;
    });
  }

}
