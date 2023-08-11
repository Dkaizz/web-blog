import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostBlogComponent } from './list-post-blog.component';

describe('ListPostBlogComponent', () => {
  let component: ListPostBlogComponent;
  let fixture: ComponentFixture<ListPostBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPostBlogComponent]
    });
    fixture = TestBed.createComponent(ListPostBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
