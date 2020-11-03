import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import {ShellMovieComponent}  from './shell-movie/shell-movie.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const routes: Routes = [

  {path:'',component:ShellMovieComponent, children:[
    {path:'',component:DisplayMovieComponent},
    {path:'create-movie',component:CreateMovieComponent},
    {path:'search-movie',component:SearchMovieComponent},
    {path:'edit-movie/:id',component:EditMovieComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
