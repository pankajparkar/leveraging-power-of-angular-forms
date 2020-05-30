import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileTemplateComponent } from './user-profile-template.component';

describe('UserProfileTemplateComponent', () => {
  let component: UserProfileTemplateComponent;
  let fixture: ComponentFixture<UserProfileTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
