import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StloginComponent } from './stlogin.component';

describe('StloginComponent', () => {
  let component: StloginComponent;
  let fixture: ComponentFixture<StloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
