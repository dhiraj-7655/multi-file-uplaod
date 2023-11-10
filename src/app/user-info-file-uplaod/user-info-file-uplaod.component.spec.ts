import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoFileUplaodComponent } from './user-info-file-uplaod.component';

describe('UserInfoFileUplaodComponent', () => {
  let component: UserInfoFileUplaodComponent;
  let fixture: ComponentFixture<UserInfoFileUplaodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoFileUplaodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoFileUplaodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
