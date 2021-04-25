import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalsapublicidadComponent } from './falsapublicidad.component';

describe('FalsapublicidadComponent', () => {
  let component: FalsapublicidadComponent;
  let fixture: ComponentFixture<FalsapublicidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalsapublicidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalsapublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
