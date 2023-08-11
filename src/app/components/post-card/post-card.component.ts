import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BlogPostVM} from "../../model/blog-post";

interface postCard{
  title:string,
  content:string,
  view:number,
  createdAt:string,
  updateAt:string
}
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})

export class PostCardComponent implements OnChanges{

  @Input() data!:BlogPostVM;
  dateCreatePost='';
  ngOnChanges(changes: SimpleChanges): void {
    // Xử lý thay đổi của input data ở đây
    if (changes['data']) {
      // Thực hiện các hành động cần thiết khi input data thay đổi
      // Ví dụ: Gọi một hàm xử lý dữ liệu mới, render lại dữ liệu, v.v.
      this.dateCreatePost = new Date(this.data.createdAt).toDateString();

    }
  }
}
