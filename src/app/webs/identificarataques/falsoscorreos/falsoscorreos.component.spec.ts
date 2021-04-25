import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalsoscorreosComponent } from './falsoscorreos.component';

describe('FalsoscorreosComponent', () => {
  let component: FalsoscorreosComponent;
  let fixture: ComponentFixture<FalsoscorreosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalsoscorreosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalsoscorreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
