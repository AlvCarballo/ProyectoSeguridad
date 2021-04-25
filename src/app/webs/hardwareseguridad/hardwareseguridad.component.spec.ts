import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareseguridadComponent } from './hardwareseguridad.component';

describe('HardwareseguridadComponent', () => {
  let component: HardwareseguridadComponent;
  let fixture: ComponentFixture<HardwareseguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareseguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
