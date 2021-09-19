import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BourseEtVieUniversitaireComponent } from './bourse-et-vie-universitaire.component';

describe('BourseEtVieUniversitaireComponent', () => {
  let component: BourseEtVieUniversitaireComponent;
  let fixture: ComponentFixture<BourseEtVieUniversitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BourseEtVieUniversitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BourseEtVieUniversitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
