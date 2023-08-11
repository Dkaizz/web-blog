import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BlogPostCreate, BlogPostVM} from "../model/blog-post";
import {map} from "rxjs";
const apiUrl = 'http://localhost:3000/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  async getById(id:number){
    return await this.http.get<BlogPostVM>(apiUrl+'/'+id).toPromise();

  }
  async get(limit:number|null=null,page:number|null=null,category:number|null=null){
    let params = new HttpParams();

    if (limit !== null) {
      params = params.set('_limit', limit);
    }

    if (page !== null) {
      params = params.set('_page', page);
    }
    if (category !== null) {
      params = params.set('category', category);
    }
    return await this.http.get<BlogPostVM[]>(apiUrl,{params}).toPromise();
  }
  async add(data:BlogPostCreate){
    return await this.http.post(apiUrl,data).toPromise();
  }

  async update(id:number,data:BlogPostCreate){
    return await this.http.put<BlogPostVM>(apiUrl+'/'+id,data).toPromise();

  }

  async delete(id:number){
    return await this.http.delete<BlogPostVM>(apiUrl+'/'+id).toPromise();

  }
}
