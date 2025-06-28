import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class Empservive {
  emps:any
  url='http://localhost:3000/emp'
  constructor(public http:HttpClient) { }
  addEmp(emp:Emp)
  {
    this.http.post(this.url,emp).subscribe((d)=>{
      console.log('Added successfully...')
    })
  }

  getAllEmp()
  {
    this.http.get(this.url).subscribe((res)=>{
      this.emps=res;
      console.log(JSON.stringify(this.emps))
    })
    return this.emps;
  }
}
