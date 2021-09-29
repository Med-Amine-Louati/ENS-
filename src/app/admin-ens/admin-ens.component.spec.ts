import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnsComponent } from './admin-ens.component';

describe('AdminEnsComponent', () => {
  let component: AdminEnsComponent;
  let fixture: ComponentFixture<AdminEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
