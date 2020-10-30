import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import {LoginService}  from '../authentication/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  
  loggedIn:boolean;
  constructor(private login:LoginService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    this.login.isLoggedinObservable.subscribe((res)=>{
      this.loggedIn=res;
    })

   
    if(!this.loggedIn){
      this.router.navigate(['/login']);
    }
    return this.loggedIn;
  }
}
