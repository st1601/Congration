import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusictComponent } from './musict.component';

describe('MusictComponent', () => {
  let component: MusictComponent;
  let fixture: ComponentFixture<MusictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
