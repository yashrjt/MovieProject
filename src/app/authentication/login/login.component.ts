import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationChangeEvent } from '@angular/common';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup;



  constructor(private fb:FormBuilder,private log:LoginService,private router:Router) { }

  ngOnInit() {

    this.loginForm=this.fb.group({
      email:['',Validators.email],
      password:['']
    })
  }


  login(){
    console.log(this.loginForm.value);
    this.log.submitLogin(this.loginForm.value).subscribe((res)=>{
    console.log("LoginComponent -> login -> res", res)
        //navigae the user to home page
        this.router.navigate(['/home']);
    },
    (err)=>{
    console.log("LoginComponent -> login -> err", err)

    })
    this.loginForm.reset();

  }



}


