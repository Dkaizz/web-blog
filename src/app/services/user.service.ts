import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserCreate, UserLogin, UserVM} from "../model/user";
import {BehaviorSubject} from "rxjs";
const apiUrl = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogin:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!localStorage.getItem('isLogin'));
  constructor(private http:HttpClient) { }




  async add(data:UserCreate){
    return await this.http.post(apiUrl,data).toPromise();
  }
  async userlogin(params:UserLogin){
    return await this.http.get<UserVM[]>(apiUrl,{params:{
        ...params
      }}).toPromise();
  }

  isLoggedIn()
  {
    return this.isLogin;
  }
}
