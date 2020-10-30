import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {RegisterService} from '../register.service';

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
      name:[''],
      email:['',Validators.email],
      password:[''],
      passwordConfirm:[''],
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
