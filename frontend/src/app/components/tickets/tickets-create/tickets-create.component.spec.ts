import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsCreateComponent } from './tickets-create.component';

describe('TicketsCreateComponent', () => {
  let component: TicketsCreateComponent;
  let fixture: ComponentFixture<TicketsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsCreateComponent]
    });
    fixture = TestBed.createComponent(TicketsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
