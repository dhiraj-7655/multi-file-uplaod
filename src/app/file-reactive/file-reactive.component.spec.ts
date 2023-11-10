import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileReactiveComponent } from './file-reactive.component';

describe('FileReactiveComponent', () => {
  let component: FileReactiveComponent;
  let fixture: ComponentFixture<FileReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
