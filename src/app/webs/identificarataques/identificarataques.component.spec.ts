import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificarataquesComponent } from './identificarataques.component';

describe('IdentificarataquesComponent', () => {
  let component: IdentificarataquesComponent;
  let fixture: ComponentFixture<IdentificarataquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificarataquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificarataquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
