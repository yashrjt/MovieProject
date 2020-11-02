import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http';
import { JwtService } from './jwt.service';

import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[RegisterComponent, LoginComponent],
  providers:[   { provide: HTTP_INTERCEPTORS, useClass: JwtService, multi: true }]
})
export class AuthenticationModule { }
