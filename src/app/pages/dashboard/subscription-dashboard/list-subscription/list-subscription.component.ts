import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {BlogPostVM} from "../../../../model/blog-post";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BlogService} from "../../../../services/blog.service";
import {SubVM} from "../../../../model/sub";
import {SubService} from "../../../../services/sub.service";

@Component({
  selector: 'app-list-subscription',
  templateUrl: './list-subscription.component.html',
  styleUrls: ['./list-subscription.component.scss']
})
export class ListSubscriptionComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name',
    'email',
    'createdAt',
    'actions'];
  dataSource!: MatTableDataSource<SubVM>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private subService: SubService) {
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
    const data = await this.subService.get();
    if (data) {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  delete(row: BlogPostVM) {
    this.subService.delete(row.id).then(res => {
      alert("xóa thành công!");
      this.fetch();
    })
  }
}
