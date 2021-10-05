import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEspaceComponent } from './teacher-espace.component';

describe('TeacherEspaceComponent', () => {
  let component: TeacherEspaceComponent;
  let fixture: ComponentFixture<TeacherEspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
