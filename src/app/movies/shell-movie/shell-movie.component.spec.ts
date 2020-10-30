import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellMovieComponent } from './shell-movie.component';

describe('ShellMovieComponent', () => {
  let component: ShellMovieComponent;
  let fixture: ComponentFixture<ShellMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
