import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartComponent } from './navbart.component';

describe('NavbartComponent', () => {
  let component: NavbartComponent;
  let fixture: ComponentFixture<NavbartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
