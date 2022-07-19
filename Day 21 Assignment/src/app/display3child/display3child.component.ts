import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-display3child',
  templateUrl: './display3child.component.html',
  styleUrls: ['./display3child.component.css']
})
export class Display3childComponent implements OnInit {
  @Input('propUser')usersData:any;

  constructor() { }

  ngOnInit(): void 
  {
    
  }
  

}
