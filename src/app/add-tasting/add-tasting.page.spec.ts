import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTastingPage } from './add-tasting.page';

describe('AddTastingPage', () => {
  let component: AddTastingPage;
  let fixture: ComponentFixture<AddTastingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTastingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTastingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
