import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  Result1:string="This is My Angular Application";
  Result2:number=25000
  TodaysDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
