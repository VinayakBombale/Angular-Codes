import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  template:'<h1>This is Display 1 Component</h1>',
  styles:['h1 {color:red}']
 
})
export class Display1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
