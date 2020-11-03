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
        "movieid": [''],
        "director": [''],
        "description": [''],
        "imageurl": [''],
        "mpaa": [''],
        "releaseDate": [''],
        "title": [''],
        "price": [''],
        "starRating": [''],
        "approvalRating": [''],
        "category": [''],
        "tags": ['']
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
