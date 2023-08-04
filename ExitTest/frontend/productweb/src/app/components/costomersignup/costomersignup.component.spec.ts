import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostomersignupComponent } from './costomersignup.component';

describe('CostomersignupComponent', () => {
  let component: CostomersignupComponent;
  let fixture: ComponentFixture<CostomersignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostomersignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostomersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
