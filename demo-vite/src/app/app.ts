import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Empservive } from './empservive';
import { Emp } from './emp';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule,HttpClientModule,JsonPipe],
  providers:[Empservive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  emp:any;
  constructor(public empserv:Empservive)
  {
empserv.getAllEmp()
  }
  protected title = 'demo-vite';
  empForm:FormGroup=new FormGroup({
    id:new FormControl(0),
    name:new FormControl(''),
    salary:new FormControl(0)
  }) 

  func()
  {
    this.emp=new Emp(this.empForm.value.id, this.empForm.value.name, this.empForm.value.salary);
    this.empserv.addEmp(this.emp);
  }
  data:any;
  getAll()
  {
    this.data=this.empserv.getAllEmp();
    console.log(this.data)
  }
}
