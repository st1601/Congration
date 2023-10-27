import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiletComponent } from './profilet.component';

describe('ProfiletComponent', () => {
  let component: ProfiletComponent;
  let fixture: ComponentFixture<ProfiletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
