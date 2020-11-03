import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EditmovieService {

  constructor(private http:HttpClient) { }


  editMovie(movieid,moviedata){
   return  this.http.patch(`http://localhost:8080/api/movies/updateMovie/${movieid}`,moviedata,{headers:new HttpHeaders({'content-Type':'application/json'})}).pipe(
      map(res=>{ 
       
        return res;
      }),
      catchError((err)=>{
        throw err;
      })
    )
  }
}
