import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingPage } from './tasting.page';

describe('TastingPage', () => {
  let component: TastingPage;
  let fixture: ComponentFixture<TastingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
