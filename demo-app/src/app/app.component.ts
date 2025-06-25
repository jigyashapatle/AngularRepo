import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcPipe } from './calc.pipe';
import { AddPipe } from './add.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UpperCasePipe,LowerCasePipe,CurrencyPipe,DatePipe,JsonPipe,DecimalPipe,SlicePipe,CalcPipe,AddPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'demo-app';
  name='Shalini'
  d=new Date()
  emp=[{'id':101,'name':'Vijay','salary':45000},
    {'id':102,'name':'Karthik','salary':67000}
  ]
}
