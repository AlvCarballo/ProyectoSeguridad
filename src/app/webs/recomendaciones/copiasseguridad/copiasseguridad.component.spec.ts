import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiasseguridadComponent } from './copiasseguridad.component';

describe('CopiasseguridadComponent', () => {
  let component: CopiasseguridadComponent;
  let fixture: ComponentFixture<CopiasseguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopiasseguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiasseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
