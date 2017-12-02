import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Api} from './api';
@Injectable()
export class UserService {
  currentUser:any;
  constructor(private http:Http) { }

  login(body:any):any{
    return this.http.post(Api.LoginUser,body).map((res:Response)=>{
      if(res.json().status==true){
        localStorage.setItem('currentUser', JSON.stringify(res.json().data));
      }
      return res.json()
    });
  }
  register(body:any):any{
    return this.http.post(Api.Register,body).map((res:Response)=>res.json());
  }
  logout(){
    localStorage.removeItem('currentUser');
  }
  isLoggedin():boolean{
    this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser!=null){
        return true;
    }
    return false;
  }
}
