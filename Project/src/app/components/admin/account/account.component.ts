import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  showc: boolean = false;
  showp: boolean = false;
  showd: boolean = false;
  cr() {
    this.showc = !this.showc;
  }
  po() {
    this.showp = !this.showp;
  }
  dl() {
    this.showd = !this.showd;
  }
  save() {
      }
  dele() {
    }
  cl() {
    this.showc = false;
    this.showp = false;
    this.showd = false;
  }
}
