import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsChartContainerComponent } from './bugs-chart-container.component';

describe('BugsChartContainerComponent', () => {
  let component: BugsChartContainerComponent;
  let fixture: ComponentFixture<BugsChartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsChartContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsChartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
