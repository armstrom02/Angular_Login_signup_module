import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsignupComponent } from './socialsignup.component';

describe('SocialsignupComponent', () => {
  let component: SocialsignupComponent;
  let fixture: ComponentFixture<SocialsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
