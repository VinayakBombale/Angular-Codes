import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wed-ass2',
  templateUrl: './wed-ass2.component.html',
  styleUrls: ['./wed-ass2.component.css']
})
export class WedAss2Component implements OnInit {
  fName:string="";
  lName:string="";
 
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(firstValue:any,lastValue:any)
  {
    this.fName=firstValue.value;
    this.lName=lastValue.value;
  }

}
