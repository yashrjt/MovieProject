import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import {map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetmoviesService {

  constructor(private http:HttpClient) { }


  getMovies(){
   return  this.http.get('http://localhost:8080/api/movies/getAllMovies', {headers:new HttpHeaders({'content-Type':'application/json'})}).pipe(
      map(res=>{ 
       
        return res;
      }),
      catchError((err)=>{
        throw err;
      })
    )
  }


  getMovieById(movieid){
   
    return  this.http.get(`http://localhost:8080/api/movies/getMovie/${movieid}`, {headers:new HttpHeaders({'content-Type':'application/json'})}).pipe(
      map(res=>{ 
       
        return res;
      }),
      catchError((err)=>{
        throw err;
      })
    )
  }


  searchMovie(querystring){
    return  this.http.get(`http://localhost:8080/api/movies/search/?searchValue=${querystring}`, {headers:new HttpHeaders({'content-Type':'application/json'})}).pipe(
      map(res=>{ 
       
        return res;
      }),
      catchError((err)=>{
        throw err;
      })
    )
  }
}
