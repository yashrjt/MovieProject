import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import {RegisterService} from '../register.service';


function passwordMatcher(c:AbstractControl):{[key:string]:boolean}|null {
  const pwd=c.get('password');
  const cpwd=c.get('passwordConfirm');

  if(!pwd.dirty || !cpwd.dirty){
    return null;
  }
  if(pwd.value===cpwd.value){
    return null;
  }
  
    return {'match':true};
  
 
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
      passwordGroup:this.fb.group({
        password:['',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)]],
        passwordConfirm:['',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)]],
      },{validator:passwordMatcher})

    })

    // this.registerForm.get('passwordGroup.passwordConfirm').valueChanges.subscribe((char)=>{
    // console.log("RegisterComponent -> ngOnInit -> char", char)
      
    // })

    // this.registerForm.get('passwordGroup.password').valueChanges.subscribe((char)=>{
    //   console.log("RegisterComponent -> ngOnInit -> char", char)
        
    //   })
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
