import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadonlineComponent } from './seguridadonline.component';

describe('SeguridadonlineComponent', () => {
  let component: SeguridadonlineComponent;
  let fixture: ComponentFixture<SeguridadonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadonlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
