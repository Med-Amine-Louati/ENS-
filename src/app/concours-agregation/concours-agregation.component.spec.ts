import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcoursAgregationComponent } from './concours-agregation.component';

describe('ConcoursAgregationComponent', () => {
  let component: ConcoursAgregationComponent;
  let fixture: ComponentFixture<ConcoursAgregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcoursAgregationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcoursAgregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
