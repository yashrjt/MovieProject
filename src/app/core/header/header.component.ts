import { Component, OnInit } from '@angular/core';
import {LoginService}  from '../../authentication/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoggedIn:boolean;
  constructor(private login:LoginService) { }

  ngOnInit() {
    this.login.isLoggedinObservable.subscribe((res)=>{
    console.log("HeaderComponent -> ngOnInit -> res", res)
      this.userLoggedIn=res;
    })

  }

  logout(){
    this.login.logoutService();
  }

}
