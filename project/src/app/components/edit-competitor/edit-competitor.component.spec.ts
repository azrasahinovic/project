import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompetitorComponent } from './edit-competitor.component';

describe('EditCompetitorComponent', () => {
  let component: EditCompetitorComponent;
  let fixture: ComponentFixture<EditCompetitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompetitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompetitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
