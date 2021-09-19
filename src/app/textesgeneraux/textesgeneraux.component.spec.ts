import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextesgenerauxComponent } from './textesgeneraux.component';

describe('TextesgenerauxComponent', () => {
  let component: TextesgenerauxComponent;
  let fixture: ComponentFixture<TextesgenerauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextesgenerauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextesgenerauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
