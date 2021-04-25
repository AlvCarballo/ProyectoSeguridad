import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareseguridadComponent } from './softwareseguridad.component';

describe('SoftwareseguridadComponent', () => {
  let component: SoftwareseguridadComponent;
  let fixture: ComponentFixture<SoftwareseguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareseguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
