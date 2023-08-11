import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CategoryVM} from "../../../../model/category";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CategoryServiceService} from "../../../../services/category-service.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  itemEdit!: number;

  displayedColumns: string[] = ['id', 'name', 'createdAt', 'actions'];
  dataSource!: MatTableDataSource<CategoryVM>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private categoryService: CategoryServiceService) {
  }

  ngOnInit(): void {
    this.fetch();

  }

  async fetch() {
    const data = await this.categoryService.getAll();



    if (data) {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter($event: KeyboardEvent) {

    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleEdit(item: CategoryVM) {
    const inputNode = document.querySelector(`input[data-itemid='${item.id}']`) as HTMLInputElement;

    if (this.itemEdit === item.id) {
      if (inputNode) {
        if (inputNode.value.trim().length > 0) {
          console.log("inputNode: ", inputNode.value)
          item.name = inputNode.value;
          this.categoryService.update(item.id, item).then(value => {
            this.itemEdit = -1;
            this.fetch();
          });

        }
      }
    } else {
      this.itemEdit = item.id;
    }

  }

  clear(item:CategoryVM) {
    const inputNode = document.querySelector(`input[data-itemid='${item.id}']`) as HTMLInputElement;
    inputNode.innerText = item.name;
    this.itemEdit=-1;
  }

  delete(item:CategoryVM) {
    this.categoryService.delete(item.id).then(value => {
      this.fetch();

    })
  }
}
