import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  showc: boolean = false;
  cr() {
    this.showc = !this.showc;
  }
  cl() {
    this.showc = false;
  }
  save() {
  }
}
