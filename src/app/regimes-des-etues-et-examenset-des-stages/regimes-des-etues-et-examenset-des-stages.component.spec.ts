import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimesDesEtuesEtExamensetDesStagesComponent } from './regimes-des-etues-et-examenset-des-stages.component';

describe('RegimesDesEtuesEtExamensetDesStagesComponent', () => {
  let component: RegimesDesEtuesEtExamensetDesStagesComponent;
  let fixture: ComponentFixture<RegimesDesEtuesEtExamensetDesStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegimesDesEtuesEtExamensetDesStagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegimesDesEtuesEtExamensetDesStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
