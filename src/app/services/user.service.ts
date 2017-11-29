import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Api} from './api';
@Injectable()
export class UserService {

  constructor(private http:Http) { }

  login(body:any):any{
    return this.http.post(Api.LoginUser,body).map((res:Response)=>res.json());
  }
  register(body:any):any{
    return this.http.post(Api.Register,body).map((res:Response)=>res.json());
  }
}
