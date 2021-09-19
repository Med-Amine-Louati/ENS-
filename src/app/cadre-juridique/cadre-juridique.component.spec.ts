import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreJuridiqueComponent } from './cadre-juridique.component';

describe('CadreJuridiqueComponent', () => {
  let component: CadreJuridiqueComponent;
  let fixture: ComponentFixture<CadreJuridiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadreJuridiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadreJuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
