import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest ,HttpHandler} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtService implements HttpInterceptor {

  constructor() { }

  
  intercept(req: HttpRequest<any>, next: HttpHandler){
  const token=localStorage.getItem('token');

  console.log("JwtService -> intercept -> req", req)

    if(!!token){
     let clonedreq=req.clone({
       headers:req.headers.set('x-access-token',token)
     });
     return next.handle(clonedreq);
    }
    else{
      return next.handle(req);
    }
   
  }
}
