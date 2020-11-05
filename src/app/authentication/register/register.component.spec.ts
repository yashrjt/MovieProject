import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[ReactiveFormsModule,HttpClientModule]
      // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('should create a registerform variable', () => {
    expect(component.registerForm instanceof FormGroup).toBe(true);
  });




  it('should check name field', () => {
    let name=component.registerForm.get('name');
    name.setValue('yash');
    expect(name.valid).toBeTruthy();
  });

  it('should have same passwords for passwordgroup', () => {
    let pwd=component.registerForm.get('passwordGroup.password');
    let cpwd=component.registerForm.get('passwordGroup.passwordConfirm');
    pwd.setValue('yash123');
    cpwd.setValue('yash123');
    expect(component.registerForm.get('passwordGroup').valid).toBeTruthy();
  });

});


function addSum(a,b){
  return a+b;
}


const result=addSum(6,10);


