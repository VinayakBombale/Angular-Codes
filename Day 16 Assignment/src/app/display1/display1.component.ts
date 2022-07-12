import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  ResultData1:string="";
  ResultData2:string="";
  
  constructor(private data1:Data1Service) { }

  ngOnInit(): void 
  {
    const ResultData3=this.data1.dataSer1();
    const ResultData4=this.data1.displayData2();

    this.ResultData1=ResultData3;
    this.ResultData2=ResultData4;
    
  }

}
