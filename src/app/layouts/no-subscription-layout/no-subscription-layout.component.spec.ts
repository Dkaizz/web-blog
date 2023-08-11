import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSubscriptionLayoutComponent } from './no-subscription-layout.component';

describe('NoSubscriptionLayoutComponent', () => {
  let component: NoSubscriptionLayoutComponent;
  let fixture: ComponentFixture<NoSubscriptionLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoSubscriptionLayoutComponent]
    });
    fixture = TestBed.createComponent(NoSubscriptionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
