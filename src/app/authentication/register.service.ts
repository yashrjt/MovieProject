import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  //will make http call to the server to register the form
  submitRegister(formdata){
  console.log("RegisterService -> submitRegister -> formdata", formdata)
   return  this.http.post('http://localhost:8080/api/register',formdata,
                                      {headers:new HttpHeaders({'content-Type':'application/json'})})
  .pipe(
    map(res=>{
      return res;
    }),
    catchError((err)=>{
      throw err;
    })
   );
  }
}
