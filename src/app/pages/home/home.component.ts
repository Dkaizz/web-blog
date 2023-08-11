import { Component, OnInit } from '@angular/core';
import { BlogPostVM } from '../../model/blog-post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.blogService.get(4).then(res => {
      if (res) this.listData = res;
      console.log('res: ', res);
    });
  }

  listData!: BlogPostVM[];

  constructor(private blogService: BlogService) {}
}
