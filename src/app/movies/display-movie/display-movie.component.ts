import { Component, OnInit } from '@angular/core';
import {GetmoviesService}  from '../services/getmovies.service';
import { Movie } from '../movie';
import { DeletemovieService } from '../services/deletemovie.service';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {

  constructor(private getMovie:GetmoviesService,private d:DeletemovieService) { }

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

  del(movieid){
    this.d.deleteMovie(movieid).subscribe((res)=>{
    console.log("DisplayMovieComponent -> del -> res", res)
    this.getMovieList();
    },(err)=>{
    console.log("DisplayMovieComponent -> del -> err", err)
      
    })
  }

}
