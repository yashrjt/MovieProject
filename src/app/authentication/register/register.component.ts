import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {RegisterService} from '../register.service';


function emailMatcher(){
  
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {

  registerForm:FormGroup;



  constructor(private fb:FormBuilder,private reg:RegisterService) { }

  ngOnInit() {

    this.registerForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern(/^[A-Z]+$/i)]],
      email:['',[Validators.required,Validators.email]],
      emailGroup:this.fb.group({
        password:['',[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$")]],
        passwordConfirm:['',[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$")]],
      },{validator:emailMatcher})

    })
  }


  register(){
    this.reg.submitRegister(this.registerForm.value).subscribe((response)=>{
    console.log("RegisterComponent -> register -> res", response)
    },
    (err)=>{
    console.log("RegisterComponent -> register -> err", err)
    });
    //this.registerForm.reset();
  }
}
