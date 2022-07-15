import { Component, OnInit,Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display1child',
  templateUrl: './display1child.component.html',
  styleUrls: ['./display1child.component.css']
})
export class Display1ChildComponent implements OnInit {
  @Input('proUser') userName:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Display 1 Child ngOnChanges");
    const { userName } = changes;
    //console.log(userName.currentValue);
  }

}