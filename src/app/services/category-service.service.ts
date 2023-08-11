import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryCreate, CategoryVM} from "../model/category";
const apiUrl = 'http://localhost:3000/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http:HttpClient) { }

  async add(data:CategoryCreate){
    return await this.http.post(apiUrl,data).toPromise();
  }

  async getById(id:number){
    return await this.http.get<CategoryVM>(apiUrl+'/'+id).toPromise();
  }

  async getAll(){
    return await this.http.get<CategoryVM[]>(apiUrl).toPromise();
  }
  getAll2(){
    return this.http.get<CategoryVM[]>(apiUrl);
  }

  async update(id:number,data:CategoryVM){
    return await this.http.put(apiUrl+'/'+id,data).toPromise();
  }

  async delete(id:number){
    return await this.http.delete(apiUrl+'/'+id).toPromise();
  }
}
