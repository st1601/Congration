import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecComponent } from './profilec.component';

describe('ProfilecComponent', () => {
  let component: ProfilecComponent;
  let fixture: ComponentFixture<ProfilecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
