import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileModelComponent } from './user-profile-model.component';

describe('UserProfileModelComponent', () => {
  let component: UserProfileModelComponent;
  let fixture: ComponentFixture<UserProfileModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
