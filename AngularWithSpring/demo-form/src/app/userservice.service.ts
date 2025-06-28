import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  url='http://localhost:8055/user'
   data:any;
  constructor(public http:HttpClient) {

  }
  addUser(ub:User)
  {
    var ub1=JSON.stringify(ub);
    console.log(ub1);
     this.http.post(this.url+'/save',ub).subscribe((u)=>{
    });
  }

  selectAll()
  {
    console.log('Under service')
    this.http.get(this.url+'/selectAll').subscribe((data)=>{
    console.log(data)
    this.data=data;
    })
  }
}