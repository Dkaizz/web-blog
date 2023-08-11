import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBlogFormComponent } from './add-new-blog-form.component';

describe('AddNewBlogFormComponent', () => {
  let component: AddNewBlogFormComponent;
  let fixture: ComponentFixture<AddNewBlogFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewBlogFormComponent]
    });
    fixture = TestBed.createComponent(AddNewBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
