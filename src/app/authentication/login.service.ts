import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {map,catchError} from 'rxjs/operators';
import { BehaviorSubject ,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  isLoggedIn:BehaviorSubject<boolean>=new BehaviorSubject(this.checkToken());

  isLoggedinObservable:Observable<boolean>=this.isLoggedIn.asObservable();


  constructor(private http:HttpClient) { }


  checkToken(){
    let token=localStorage.getItem('token');
    if(!!token){
      return true;
    }
    else{
      return false;
    }
  }
  //will make http call to the server to register the form
  submitLogin(formdata){
 
   return  this.http.post('http://localhost:8080/api/login',formdata,
                                      {headers:new HttpHeaders({'content-Type':'application/json'})})
  .pipe(
    map(res=>{ 
      this.isLoggedIn.next(true);
      localStorage.setItem('token',res['token']);
      return res;
    }),
    catchError((err)=>{
      throw err;
    })
   );
  }


  logoutService(){
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
 
  }
}
