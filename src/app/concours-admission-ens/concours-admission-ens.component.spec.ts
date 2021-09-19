import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcoursAdmissionEnsComponent } from './concours-admission-ens.component';

describe('ConcoursAdmissionEnsComponent', () => {
  let component: ConcoursAdmissionEnsComponent;
  let fixture: ComponentFixture<ConcoursAdmissionEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcoursAdmissionEnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcoursAdmissionEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
