import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
  staticHeaderText2:string="";
  constructor( ) { }
  
  

  ngOnInit(): void 
  {
    const staticResult=Data2Service.staticHeaderText;
    this.staticHeaderText2=staticResult;
  }

}
