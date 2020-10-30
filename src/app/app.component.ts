import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string= 'MovieProject';

  city:string;

  toggleName:boolean=true;
  studentarr:Array<string>=["kelly","Andrew","Johnson"];

  imageSource:string='../favicon.ico';
  
  empAvailability:boolean=true;


  empName:string='John';

  getTitle():string{
    return this.title;
  }

  getSum(a:number,b:number):number{
    return a+b;
  }


  submit(){
    console.log('you clicked the button')
    this.city='Chicago';
    console.log("AppComponent -> submit -> this.city", this.city);
    this.toggleName=!this.toggleName;
    this.empName='David';
  }
}
