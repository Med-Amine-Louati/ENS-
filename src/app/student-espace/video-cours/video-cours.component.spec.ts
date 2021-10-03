import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursComponent } from './video-cours.component';

describe('VideoCoursComponent', () => {
  let component: VideoCoursComponent;
  let fixture: ComponentFixture<VideoCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
