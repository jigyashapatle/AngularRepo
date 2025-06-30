import { HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

    private routes = inject(ActivatedRoute);
    id:any;
    data:any;
    ngOnInit()
    {
      this.routes.paramMap.subscribe((params) => {
        this.id = params.get('id');
        this.data=JSON.parse(this.id).empid
        console.log(this.id)
      });
    }
}
