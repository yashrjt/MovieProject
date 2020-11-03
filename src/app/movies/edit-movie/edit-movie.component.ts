import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {EditmovieService} from '../services/editmovie.service';
import {GetmoviesService} from '../services/getmovies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movieForm:FormGroup;
  currentMovieData:Movie;
  currentMovieid:number;
  constructor(private fb:FormBuilder,private e:EditmovieService,
    private movie:GetmoviesService,private r:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.currentMovieid=this.r.snapshot.params.id;
    console.log(this.r.snapshot.params.id);

    this.movie.getMovieById(this.r.snapshot.params.id).subscribe((res)=>{
    console.log("EditMovieComponent -> ngOnInit -> res", res['data'])
      this.currentMovieData=res['data'];
      this.movieForm=this.fb.group({
        "movieid": [this.currentMovieData.movieid],
        "director": [this.currentMovieData.director],
        "description": [this.currentMovieData.description],
        "imageurl": [this.currentMovieData.imageurl],
        "mpaa": [this.currentMovieData.mpaa],
        "releaseDate": [this.currentMovieData.releaseDate],
        "title": [this.currentMovieData.title],
        "price": [this.currentMovieData.price],
        "starRating": [this.currentMovieData.starRating],
        "approvalRating": [this.currentMovieData.approvalRating],
        "category": [this.currentMovieData.category],
        "tags": [this.currentMovieData.tags]
      })

    },
    (err)=>{
    console.log("EditMovieComponent -> ngOnInit -> err", err)
      
    })

    this.movieForm=this.fb.group({
      "movieid": [],
      "director": [],
      "description": [],
      "imageurl": [],
      "mpaa": [],
      "releaseDate": [],
      "title": [],
      "price": [],
      "starRating": [],
      "approvalRating": [],
      "category": [],
      "tags": []
    })

  }

  editMovie(){
    console.log("EditMovieComponent -> editMovie -> movieid", this.currentMovieid)
    console.log(this.movieForm.value)
    this.e.editMovie(this.currentMovieid,this.movieForm.value).subscribe((res)=>{
    console.log("EditMovieComponent -> editMovie -> res", res)
      this.router.navigate(['/movies']);

    },(err)=>{
    console.log("EditMovieComponent -> editMovie -> err", err)
      
    })
  }

}
