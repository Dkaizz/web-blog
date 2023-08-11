import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAddConditionComponent } from './terms-add-condition.component';

describe('TermsAddConditionComponent', () => {
  let component: TermsAddConditionComponent;
  let fixture: ComponentFixture<TermsAddConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsAddConditionComponent]
    });
    fixture = TestBed.createComponent(TermsAddConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
