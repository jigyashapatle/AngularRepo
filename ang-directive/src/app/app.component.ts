import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name='praveen'
  title = 'ang-directive';
  emp=[{id:101,name:'Vijay',salary:45000},
    {id:102,name:'Karthik',salary:47000},
    {id:103,name:'Arun',salary:49000}
  ]

  func(data:any)
  {
    console.log('you clicked')
    alert(JSON.stringify(data))
  }
}
