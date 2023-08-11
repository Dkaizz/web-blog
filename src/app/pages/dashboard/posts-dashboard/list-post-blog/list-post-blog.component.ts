import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CategoryVM} from "../../../../model/category";
import {BlogPostVM} from "../../../../model/blog-post";
import {BlogService} from "../../../../services/blog.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-post-blog',
  templateUrl: './list-post-blog.component.html',
  styleUrls: ['./list-post-blog.component.scss']
})
export class ListPostBlogComponent implements OnInit {

  displayedColumns: string[] = ['id', 'category',
    'excerpt',
    'img',
    'permalink',
    'title',
    'view',
    'createdAt',
    'status', 'actions'];
  dataSource!: MatTableDataSource<BlogPostVM>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private blogSerVice: BlogService) {
  }

  ngOnInit(): void {
    this.fetch();
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async fetch() {
    const data = await this.blogSerVice.get();
    if (data) {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  delete(row: BlogPostVM) {
    this.blogSerVice.delete(row.id).then(res => {
      alert("xóa thành công!");
      this.fetch();
    })
  }
}
