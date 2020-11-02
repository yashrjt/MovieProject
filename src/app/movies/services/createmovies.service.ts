import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {map,catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CreatemoviesService {

 
  constructor(private http:HttpClient) { }


  createNewMovie(moviedata){
   return  this.http.post('http://localhost:8080/api/movies/createMovie', moviedata,{headers:new HttpHeaders({'content-Type':'application/json'})}).pipe(
      map(res=>{ 
       
        return res;
      }),
      catchError((err)=>{
        throw err;
      })
    )
  }
}
