import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEventsComponent } from './crud-events.component';

describe('CrudEventsComponent', () => {
  let component: CrudEventsComponent;
  let fixture: ComponentFixture<CrudEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudEventsComponent]
    });
    fixture = TestBed.createComponent(CrudEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
