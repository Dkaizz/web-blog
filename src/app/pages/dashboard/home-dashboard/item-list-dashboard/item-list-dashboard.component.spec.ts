import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListDashboardComponent } from './item-list-dashboard.component';

describe('ItemListDashboardComponent', () => {
  let component: ItemListDashboardComponent;
  let fixture: ComponentFixture<ItemListDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListDashboardComponent]
    });
    fixture = TestBed.createComponent(ItemListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
