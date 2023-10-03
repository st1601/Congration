import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintComponent } from './maint.component';

describe('MaintComponent', () => {
  let component: MaintComponent;
  let fixture: ComponentFixture<MaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
