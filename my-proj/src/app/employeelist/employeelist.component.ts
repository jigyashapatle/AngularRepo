import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  imports: [CommonModule],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  constructor(public router:Router)
  {

  }
  emp=[
    {empid:101,name:'Karthik',salary:55000},
    {empid:102,name:'Rajesh',salary:57000},
    {empid:103,name:'Gokul',salary:58000},
    {empid:104,name:'Mukesh',salary:59000},
    {empid:105,name:'Praveen',salary:62000}
  ]

  id={empid:102}
  d:any;

  func(data:any)
  {
    // alert(JSON.stringify(data))
    // (document.getElementById("abc")as HTMLElement).innerHTML=JSON.stringify(data)
    // this.router.navigate(['emp/:data'])
    this.d=JSON.stringify(data)
    console.log(this.d) 
    this.router.navigateByUrl('emp/'+this.d)
    // this.router.navigate(['/emp',data])
  }
}