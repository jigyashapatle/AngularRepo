import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { JsonPipe } from '@angular/common';
import { User } from './user';
import { UserserviceService } from './userservice.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,HttpClientModule],
  providers:[UserserviceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-form';
  userModel=new User('Admin','123',false);
  constructor(public userserv:UserserviceService)
  {

  }
  saveData()
  {
    // alert(JSON.stringify(this.userModel))
    this.userserv.addUser(this.userModel);
  }
   func()
  {

   console.log(this.userserv.selectAll())
  }
}
