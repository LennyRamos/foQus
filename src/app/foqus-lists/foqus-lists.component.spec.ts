import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoqusListsComponent } from './foqus-lists.component';

describe('FoqusListsComponent', () => {
  let component: FoqusListsComponent;
  let fixture: ComponentFixture<FoqusListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoqusListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoqusListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
