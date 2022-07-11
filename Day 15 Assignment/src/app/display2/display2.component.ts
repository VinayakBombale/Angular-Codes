import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  publicHeader:string="";
  constructor(private data:DataService) { }

  ngOnInit(): void 
  {
    const Result=this.data.headertext;
    this.publicHeader=Result;
    

  }


}
