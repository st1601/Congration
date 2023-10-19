import { Component } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent {
  showp: boolean = false;
  po() {
    this.showp = !this.showp;
  }
  cl() {
    this.showp = false;
  }
}
