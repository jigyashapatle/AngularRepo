import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements AfterViewInit {
  @ViewChild(Child) pup!: Child;
  protected title = 'vite-project';
 ngAfterViewInit(): void 
  {
    console.log(this.pup.display())
  }
}



// export class App implements OnInit,DoCheck,AfterContentInit,AfterContentChecked{
//   ngAfterContentChecked(): void {
//     console.log('After ng content checked')
//   }
//   ngAfterContentInit(): void {
//     console.log('After ng content initialized')
//   }
//   ngDoCheck(): void {
//     console.log('Do check is called')
//   }
//   ngOnInit(): void {
//     (document.getElementById("a")as HTMLElement).innerHTML='Welcome to Mphasis'
//     console.log('Angular App is initialized')
//   }
//   protected title = 'vite-project';
// }