import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http';



@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[RegisterComponent, LoginComponent]
})
export class AuthenticationModule { }
