import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homecontrol',
  templateUrl: './homecontrol.component.html',
  styleUrls: ['./homecontrol.component.scss']
})
export class HomecontrolComponent {
  corridor = 0;
  room = 0;
  rightR = 0;
  rightG = 0;
  rightB = 0;
  leftR = 0;
  leftG = 0;
  leftB = 0;

  constructor(private http: HttpClient) { }

  corridorChange() {
    console.log("change " + this.corridor)
    this.sendWhiteRequest("lamp3", this.corridor);
  }

  sendWhiteRequest(lamp: string, w: number) {
    this.http.post<any>('/api/v1/send/lamp', { req: lamp, w }).subscribe(data => {
      console.log("sent");
    });
  }

  sendColorRequest(lamp: string, r: number, g: number, b: number) {
    this.http.post<any>('/api/v1/send/lamp', { req: lamp, r, g, b }).subscribe(data => {
      console.log("sent");
    });
  }

}
