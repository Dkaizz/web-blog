import {Component} from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute} from "@angular/router";
import {CategoryServiceService} from "../../services/category-service.service";
import {BlogPostVM} from "../../model/blog-post";
import {CategoryVM} from "../../model/category";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];


      this.blogService.getById(id).then(res => {
        if (res) {
          this.data = res;
          this.blogService.get(6, 1, res.category).then(res2 => {
            if (res2) this.listdata = res2;
          })
        }
      })

    });
  }

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private categoryService: CategoryServiceService) {
  }

  listdata: BlogPostVM[] = [];
  data!: BlogPostVM;
}
