import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutsParticuliersComponent } from './statuts-particuliers.component';

describe('StatutsParticuliersComponent', () => {
  let component: StatutsParticuliersComponent;
  let fixture: ComponentFixture<StatutsParticuliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutsParticuliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutsParticuliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
