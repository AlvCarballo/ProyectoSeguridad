import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorespasswdComponent } from './gestorespasswd.component';

describe('GestorespasswdComponent', () => {
  let component: GestorespasswdComponent;
  let fixture: ComponentFixture<GestorespasswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorespasswdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorespasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
