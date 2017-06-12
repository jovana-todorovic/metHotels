import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html'
})
export class AddroomComponent {
  postResponse: String;
  addRoomForm = new FormGroup({
    roomname: new FormControl(),
    tv: new FormControl(),
    beds: new FormControl()
  });

  constructor(private http: Http, private router: Router) { }

  onAddRoom() {
    var data = "roomName=" + this.addRoomForm.value.roomname +
    "&hasTV=" + this.addRoomForm.value.tv +
    "&beds=" + this.addRoomForm.value.beds;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this.http.post('http://localhost/it255/metHotels/addroomservice.php', data, {headers: headers})
    .subscribe(
      data => {
        if (data["_body"].indexOf('error') === -1) {
          this.router.navigate(['./getrooms']);
        }
      }
    );
  }

}
