import { Component, OnInit } from '@angular/core';
import { Data3Service } from '../data3.service';

@Component({
  selector: 'app-display4',
  templateUrl: './display4.component.html',
  styleUrls: ['./display4.component.css']
})
export class Display4Component implements OnInit {
  privateHeader2:string="";

  constructor(private data3:Data3Service) { }

  ngOnInit(): void {

    const pvtResult=this.data3.msgNotify();
    this.privateHeader2=pvtResult;
  }

}
