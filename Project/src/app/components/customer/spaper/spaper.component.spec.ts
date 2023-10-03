import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaperComponent } from './spaper.component';

describe('SpaperComponent', () => {
  let component: SpaperComponent;
  let fixture: ComponentFixture<SpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
