import {Component, OnInit} from '@angular/core';
import {CategoryVM} from "../../../model/category";
import {Router} from "@angular/router";
import {CategoryServiceService} from "../../../services/category-service.service";

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss']
})
export class CategoryNavbarComponent implements OnInit{
  ngOnInit(): void {
    this.fetchCategory();
  }

  listNav:CategoryVM[] =[]
  constructor(private categoryService:CategoryServiceService) {
  }
  async fetchCategory(){
    this.categoryService.getAll().then(res=>{
      if(res)this.listNav=res;
    })
  }
}
