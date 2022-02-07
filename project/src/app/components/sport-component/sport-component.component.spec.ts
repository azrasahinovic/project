import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportComponentComponent } from './sport-component.component';

describe('SportComponentComponent', () => {
  let component: SportComponentComponent;
  let fixture: ComponentFixture<SportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
