import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit,OnChanges {

  //gets the movielist from parent comp
  @Input() listMovies:Movie;
  @Output() delMovie=new EventEmitter();
  @Output() editMovie=new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  
  }

  ngOnChanges(){
    console.log("ListMovieComponent -> listMovies", this.listMovies)
  }


  edit(movieid){
  this.editMovie.emit(movieid);
  }


  delete(movieid){
    this.delMovie.emit(movieid);

  }
}
