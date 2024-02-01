import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  styleUrl: './counter.component.css',  
  template: `
    <hr>
    <h1> Counter Component: {{ counter }}</h1>
    <button (click)="increaseBy(+1)">Increase</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">Decrease</button>
  `

})

export class CounterComponent {
  public counter:number = 0 

  increaseBy( value:any ):void {
    this.counter +=  value;
  }
  resetCounter(){
    this.counter = 0
  }
}