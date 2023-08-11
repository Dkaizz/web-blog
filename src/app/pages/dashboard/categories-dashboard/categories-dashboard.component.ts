import {Component, OnInit} from '@angular/core';
import {CategoryServiceService} from "../../../services/category-service.service";

@Component({
  selector: 'app-categories-dashboard',
  templateUrl: './categories-dashboard.component.html',
  styleUrls: ['./categories-dashboard.component.scss']
})
export class CategoriesDashboardComponent implements OnInit{
  constructor(private categoryService:CategoryServiceService) {
  }
  ngOnInit(): void {
    this.fecthApi();
  }


  fecthApi = async ()=>{
    const res = await this.categoryService.getAll();
    console.log("res: ",res);
    const res1 = await this.categoryService.getAll2();
    console.log("res1: ",res1);
  }

}
