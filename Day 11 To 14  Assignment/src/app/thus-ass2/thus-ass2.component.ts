import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thus-ass2',
  templateUrl: './thus-ass2.component.html',
  styleUrls: ['./thus-ass2.component.css']
})
export class ThusAss2Component implements OnInit {
colour:String="";
  constructor() { }

  ngOnInit(): void {
  }
  onRed()
  {
    this.colour="Red";
  }
  onBlue()
  {
    this.colour="Blue"
  }
 
  onGreen()
  {
    this.colour="Green";
  }

 

}
