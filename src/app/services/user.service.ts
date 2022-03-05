import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
//import HttpClientModule in app.module.ts
  constructor(private http:HttpClient) { }

  //add user
  
  public addUser(user:any){
    return this.http.post(`${baseUrl}/user/`,user);
  }
}
