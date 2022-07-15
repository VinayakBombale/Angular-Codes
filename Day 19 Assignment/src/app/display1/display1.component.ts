import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  name:any="";
  constructor() { }

  ngOnInit(): void {
  }

  submit(username:any) {
    
    console.log(username);
    
        this.name=username.value;
  }

}