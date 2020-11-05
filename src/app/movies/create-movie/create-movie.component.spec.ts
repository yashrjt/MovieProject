import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieComponent } from './create-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {By} from '@angular/platform-browser';

describe('CreateMovieComponent', () => {
  let component: CreateMovieComponent;
  let fixture: ComponentFixture<CreateMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMovieComponent ],
      imports:[ReactiveFormsModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call craetemovie method when clicked the button', () => {
    spyOn(component,'createMovie');
    component.ngOnInit();
    let input = fixture.debugElement.query(By.css('form'));
    input.triggerEventHandler('ngSubmit',null);
    fixture.detectChanges();
    expect(component.createMovie).toHaveBeenCalled();

    console.log("button", input)
  });


});
