import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  handleEvent(event:MouseEvent)
  {
    // console.log('function called',event);
    console.log('function called',event.type);
    // console.log('function called',event.target);
    // console.log('function called',event.target.name);
    // console.log('function called',(event.target as Element).classList);
    // console.log('function called',(event.target as Element).className);
  }
  title = 'angular-events';

  event(event:Event)
  {
    console.log('function called',event.type);
    console.log("value",(event.target as HTMLInputElement).value);
  }
}
