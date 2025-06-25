import { Component } from '@angular/core';

@Component({
  selector: 'app-second-child',
  imports: [],
  // templateUrl: './second-child.component.html',
  template: `<p>Welcome to Child</p>
  <p>Welcome to Angular</p>`,
  // styleUrl: './second-child.component.css'
  styles : `p{background-color:yellow;}`
})
export class SecondChildComponent {

}
