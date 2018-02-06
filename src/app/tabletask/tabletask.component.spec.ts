import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletaskComponent } from './tabletask.component';

describe('TabletaskComponent', () => {
  let component: TabletaskComponent;
  let fixture: ComponentFixture<TabletaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
