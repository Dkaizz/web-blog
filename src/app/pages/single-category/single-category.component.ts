import {Component, OnInit} from '@angular/core';
import {BlogPostVM} from "../../model/blog-post";
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute} from "@angular/router";
import {CategoryServiceService} from "../../services/category-service.service";
import {CategoryVM} from "../../model/category";

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.blogService.get(6, 1, id).then(res => {
        if (res) this.listdata = res;
      })

      this.categoryService.getById(id).then(res => {
        if (res) this.category = res;
      })

    });
  }

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private categoryService: CategoryServiceService) {
  }

  listdata: BlogPostVM[] = [];
  category!: CategoryVM;
}
