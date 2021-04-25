import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadwifiComponent } from './seguridadwifi.component';

describe('SeguridadwifiComponent', () => {
  let component: SeguridadwifiComponent;
  let fixture: ComponentFixture<SeguridadwifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadwifiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadwifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
