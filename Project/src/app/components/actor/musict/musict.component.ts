import { Component } from '@angular/core';

@Component({
  selector: 'app-musict',
  templateUrl: './musict.component.html',
  styleUrls: ['./musict.component.scss']
})
export class MusictComponent {
  showc: boolean = false;
  showp: boolean = false;
  cr() {
    this.showc = !this.showc;
  }
  po() {
    this.showp = !this.showp;
  }
  cl() {
    this.showp = false;
    this.showc = false;
  }
  save() {
  }
}
