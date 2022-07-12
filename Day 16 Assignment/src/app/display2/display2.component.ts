import { Component, OnInit } from '@angular/core';
// import { LoggerService } from '../logger.service';
import { MsgDisplayService } from '../msg-display.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  showResult:string="";

  constructor(private data1:MsgDisplayService) { }

  ngOnInit(): void {
    const showResult2=this.data1.msgDisplay1();
    this.showResult=showResult2;
  }

}
