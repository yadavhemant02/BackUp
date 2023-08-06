import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StshowComponent } from './stshow.component';

describe('StshowComponent', () => {
  let component: StshowComponent;
  let fixture: ComponentFixture<StshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
