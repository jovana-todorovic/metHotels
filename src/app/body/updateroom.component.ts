import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-updateroom',
  templateUrl: './updateroom.component.html',
  styleUrls: ['./updateroom.component.css']
})
export class UpdateroomComponent {
  updateRoomForm = new FormGroup({
    roomname: new FormControl(),
    tv: new FormControl(),
    beds: new FormControl()
  });

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }


  onUpdateRoom() {
    this.route.params.subscribe( params => {
      var data = "roomName=" + this.updateRoomForm.value.roomname +
      "&hasTV=" + this.updateRoomForm.value.tv +
      "&beds=" + this.updateRoomForm.value.beds +
      "&id=" + params.id;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('token', localStorage.getItem('token'));
      this.http.post('http://localhost/it255/metHotels/updateroomservice.php', data, {headers: headers})
      .subscribe(
        data => {
          if (data["_body"].indexOf('error') === -1) {
            this.router.navigate(['./getrooms']);
          }
        }
      );
    });
    
  }

}
