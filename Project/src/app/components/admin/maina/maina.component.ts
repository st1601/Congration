import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-maina',
  templateUrl: './maina.component.html',
  styleUrls: ['./maina.component.scss']
})
export class MainaComponent {

	constructor(config: NgbCarouselConfig) {
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
}
