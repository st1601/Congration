import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiccComponent } from './musicc.component';

describe('MusiccComponent', () => {
  let component: MusiccComponent;
  let fixture: ComponentFixture<MusiccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusiccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusiccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
