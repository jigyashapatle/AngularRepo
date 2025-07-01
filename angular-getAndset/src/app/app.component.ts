import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name=""
  displayName=""
  email=""
  getName(event:Event)
  {
    const name=(event.target as HTMLInputElement).value
    console.log(name);

    this.name=name
  }

  showName()
  {
    this.displayName=this.name;
  }

  setName()
  {
    this.name="Sam";
  }

  getEmail(val:string)
  {
    console.log(val);
    this.email=val;
  }

  setEmail()
  {
    this.email="mphasis@gmail.com";
  }
  title = 'angular-getAndset';
}
