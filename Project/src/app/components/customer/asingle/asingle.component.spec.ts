import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsingleComponent } from './asingle.component';

describe('AsingleComponent', () => {
  let component: AsingleComponent;
  let fixture: ComponentFixture<AsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
