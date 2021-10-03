import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEspaceComponent } from './student-espace.component';

describe('StudentEspaceComponent', () => {
  let component: StudentEspaceComponent;
  let fixture: ComponentFixture<StudentEspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
