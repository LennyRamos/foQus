import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoqusListComponent } from './foqus-list.component';

describe('FoqusListComponent', () => {
  let component: FoqusListComponent;
  let fixture: ComponentFixture<FoqusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoqusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoqusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
