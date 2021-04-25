import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadbiometricaComponent } from './seguridadbiometrica.component';

describe('SeguridadbiometricaComponent', () => {
  let component: SeguridadbiometricaComponent;
  let fixture: ComponentFixture<SeguridadbiometricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadbiometricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadbiometricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
