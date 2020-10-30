import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellMovieComponent } from './shell-movie/shell-movie.component';



@NgModule({
  declarations: [ShellMovieComponent],
  imports: [
    CommonModule
  ],
  exports:[ShellMovieComponent]
})
export class MoviesModule { }
