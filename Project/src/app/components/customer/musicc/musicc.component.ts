import { Component } from '@angular/core';

@Component({
  selector: 'app-musicc',
  templateUrl: './musicc.component.html',
  styleUrls: ['./musicc.component.scss']
})
export class MusiccComponent {
  showp: boolean = false;
  po() {
    this.showp = !this.showp;
  }
  cl() {
    this.showp = false;
  }
  save() {
  }
}
