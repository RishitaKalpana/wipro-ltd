import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  constructor(private http:HttpClient) { }
   
  helloService(){
    return "Angular Service"
    
  }
  getUsers() {
  return this.http.get('https://reqres.in/api/users') }

  baseUrl='http://localhost:9005/user';
  getAccounts(employeeId:number):Observable<Account> 
  {
    return this.http.get<Account>(`${this.baseUrl}/${employeeId}`);
  }
   }
  