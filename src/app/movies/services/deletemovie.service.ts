import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeletemovieService {

  constructor(private http:HttpClient) { }


  deleteMovie(movieid){
   return  this.http.delete(`http://localhost:8080/api/movies/deleteMovie/${movieid}`,{headers:new HttpHeaders({'content-Type':'application/json'})}).pipe(
      map(res=>{ 
       
        return res;
      }),
      catchError((err)=>{
        throw err;
      })
    )
  }
}
