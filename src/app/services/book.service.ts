import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Api } from './api';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BookService {

  constructor(private http:Http) {

   }
   getAllBooks():any{
     return this.http.get(Api.GetAllBook).map((res:Response)=>res.json());
   }
   getByIdBook(id:any):any{
     return this.http.get(Api.GetByIdBook+'/'+id).map((res:Response)=>res.json());
   }
   createBook(data:any):any{
     return this.http.post(Api.CreateBook,data).map((res:Response)=>res.json());
   }
   updateBook(id:any,data:any):any{
    return this.http.put(Api.UpdateBook+'/'+id,data).map((res:Response)=>res.json());
   }
   deleteBook(id:any):any{
     return this.http.delete(Api.DeleteBook+'/'+id).map((res:Response)=>res.json());
   }

}
