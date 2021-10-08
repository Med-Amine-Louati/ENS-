import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamNoteComponent } from './exam-note.component';

describe('ExamNoteComponent', () => {
  let component: ExamNoteComponent;
  let fixture: ComponentFixture<ExamNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
