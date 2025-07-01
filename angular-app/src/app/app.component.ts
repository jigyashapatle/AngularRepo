import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,SignUpComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count:number=0;


  // handleIncrement()
  // {
  //   // this.count++;
  //   this.count=this.count+1;
  // }

  // handleDecrement()
  // {
  //   // this.count--;
  //   this.count=this.count-1;
  // }

  // handleReset()
  // {
  //   this.count=0;
  // }

  handlecounter(val:string)
  {
    if(val=='minus'){
      this.count=this.count-1;
    } else if(val=='plus'){
      this.count=this.count+1;
    }else{
      this.count=0;
    }
  }




  // handleClickEvent()
  // {
  //   // alert('Function Called')
  //   console.log('Function Called');
  //   this.otherFunction();
  // }

  // otherFunction()
  // {
  //   console.log("Other function");
  // }
  // title = 'angular-app';

  //Property...
  // name:string="Jigyasha Patle"

  // data:string|number="Hello"

  // other:any=true;
  // updateName()
  // {
    //variable...
    // let x=30;


    // this.name="Peter";
    // this.name=20;
    
    // this.data="Jigyasha";
    // this.data=24;

    // this.other="Jigyasha";
    // this.other=false;
    // this.other=24; 
    // console.log(this.other);

    // this.sum2(40,50);
  // }

  // updateVar()
  // {
  //   let x:number|boolean=30;
  //   console.log(x);
  //   x=true;
  //   console.log(x);
  // }

  // sum(a:any,b:any)
  // {
  //   console.log(a+b);
  // }

  // sum2(a:number,b:number)
  // {
  //   console.log(a+b);
  // }
}
