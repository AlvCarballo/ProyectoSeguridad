import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlavesseguridadComponent } from './llavesseguridad.component';

describe('LlavesseguridadComponent', () => {
  let component: LlavesseguridadComponent;
  let fixture: ComponentFixture<LlavesseguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlavesseguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlavesseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
