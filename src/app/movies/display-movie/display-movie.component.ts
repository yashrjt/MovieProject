import { Component, OnInit } from '@angular/core';
import {GetmoviesService}  from '../services/getmovies.service';
import { Movie } from '../movie';
import { DeletemovieService } from '../services/deletemovie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {

  constructor(private getMovie:GetmoviesService,private d:DeletemovieService,private router:Router) { }

  movieList:Array<Movie>;

  ngOnInit() {
   this.getMovieList();
  }


  getMovieList(){
    this.getMovie.getMovies().subscribe((res)=>{
      
      this.movieList=res['data']['result'];
      console.log("DisplayMovieComponent -> ngOnInit -> this.movieList", this.movieList)
    },
    (err)=>{
      console.log(err)
    })
  }

  del($event){
  
    this.d.deleteMovie($event).subscribe((res)=>{
    console.log("DisplayMovieComponent -> del -> res", res)
    this.getMovieList();
    },(err)=>{
    console.log("DisplayMovieComponent -> del -> err", err)
      
    })
  }

  edit($event){
   
    this.router.navigate([`/movies/edit-movie/${$event}`]);
  }

}
