import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellMovieComponent } from './shell-movie/shell-movie.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

import {RouterModule}  from '@angular/router';
import {MoviesRoutingModule}  from './movies.routing.module';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';

@NgModule({
  declarations: [ShellMovieComponent,ListMovieComponent, CreateMovieComponent,SearchMovieComponent,DisplayMovieComponent,EditMovieComponent],
  imports: [
    CommonModule,
    RouterModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ShellMovieComponent,ListMovieComponent,CreateMovieComponent,SearchMovieComponent,DisplayMovieComponent,EditMovieComponent]
})
export class MoviesModule { }
