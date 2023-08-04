import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostomerloginComponent } from './costomerlogin.component';

describe('CostomerloginComponent', () => {
  let component: CostomerloginComponent;
  let fixture: ComponentFixture<CostomerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostomerloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostomerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
