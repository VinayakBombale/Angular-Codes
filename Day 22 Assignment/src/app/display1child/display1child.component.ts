import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-display1child',
  templateUrl: './display1child.component.html',
  styleUrls: ['./display1child.component.css']
})
export class Display1childComponent implements OnInit {
  @Input('propUser') empData:any;
  constructor() { }

  ngOnInit(): void {
  }


}