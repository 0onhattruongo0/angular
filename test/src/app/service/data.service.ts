import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


const API = 'http://127.0.0.1:8000/api/employee/';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get(API);
  }
  insertData(data){
    return this.httpClient.post(API, data);
  }
  deleteData(id){
    return this.httpClient.delete(API+id);
  }
  getEmployeeById(id){
    return this.httpClient.get(API+id);
  }
  updateData(id, data){
    return this.httpClient.put(API+id, data);
  }
}
