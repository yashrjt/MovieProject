import { Component, OnInit } from '@angular/core';
import { GetmoviesService } from '../services/getmovies.service';
import { FormGroup, FormBuilder } from '@angular/forms';

import {Movie} from '../movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {


  searchForm:FormGroup;
  searchResults:Array<Movie>;

  constructor(private search:GetmoviesService,private fb:FormBuilder) { }

  ngOnInit() {
      this.searchForm=this.fb.group({
        searchData:['']
      })

    this.searchForm.get('searchData').valueChanges.subscribe((characters)=>{
   
       this.search.searchMovie(characters).subscribe((res)=>{
       console.log("SearchMovieComponent -> ngOnInit -> res", res)
         this.searchResults=res['data'];
       },
       (err)=>{
       console.log("SearchMovieComponent -> ngOnInit -> err", err)
         
       })
    });
  }



}
