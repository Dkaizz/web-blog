import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SubCreate, SubVM} from "../model/sub";
const apiUrl = 'http://localhost:3000/sub';

@Injectable({
  providedIn: 'root'
})

export class SubService {

  constructor(private http: HttpClient) {
  }

  async add(data: SubCreate) {
    return await this.http.post(apiUrl, data).toPromise();
  }

  async get(){
    return await this.http.get<SubVM[]>(apiUrl).toPromise()
  }

  async delete(id:number){
    return await this.http.delete(apiUrl+'/'+id).toPromise();
  }
}
