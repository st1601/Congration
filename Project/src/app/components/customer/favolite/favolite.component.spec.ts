import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoliteComponent } from './favolite.component';

describe('FavoliteComponent', () => {
  let component: FavoliteComponent;
  let fixture: ComponentFixture<FavoliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
