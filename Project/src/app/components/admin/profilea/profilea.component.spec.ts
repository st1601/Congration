import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileaComponent } from './profilea.component';

describe('ProfileaComponent', () => {
  let component: ProfileaComponent;
  let fixture: ComponentFixture<ProfileaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
