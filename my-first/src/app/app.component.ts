import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyChildComponent } from './my-child/my-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyChildComponent,SecondChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first';
}