import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { ShellMovieComponent } from './movies/shell-movie/shell-movie.component';

import {LoginGuard}  from './authentication/login.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'movies',component:ShellMovieComponent,canActivate:[LoginGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
