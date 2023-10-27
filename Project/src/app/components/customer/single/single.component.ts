import { Component } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent {
  showp: boolean = false;
  po() {
    this.showp = !this.showp;
  }
  cl() {
    this.showp = false;
  }
}
