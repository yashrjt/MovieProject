import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {CreatemoviesService} from '../services/createmovies.service';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {


  movieForm:FormGroup;

  constructor(private fb:FormBuilder,private m:CreatemoviesService) { }

  ngOnInit() {
    this.movieForm=this.fb.group({
        "movieid": 7,
        "director": "abc",
        "description": "Gandalf and Aragorn lead the World of Men against Sauron\"s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "imageurl": "https://www.movieposter.com/posters/archive/main/17/MPW-8715",
        "mpaa": "pg-13",
        "releaseDate": "2003-12-15",
        "title": "The Lord of the Rings: The Return of the King",
        "price": 15.95,
        "starRating": 4.5,
        "approvalRating": 0.9895,
        "category": "action",
        "tags": ""
    })
  }

  createMovie(){
    console.log(this.movieForm.value)
    this.m.createNewMovie(this.movieForm.value).subscribe((res)=>{
    console.log("CreateMovieComponent -> createMovie -> res", res)

    },(err)=>{
    console.log("CreateMovieComponent -> createMovie -> err", err)
      
    })
  }

}
