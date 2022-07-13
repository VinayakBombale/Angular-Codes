import { Component, OnInit } from '@angular/core';

import { myNameSpace } from '../data1.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  showResult1:string="";
  showResult2:string="";
  showResult3:string="";
  showResult4:string="";

  constructor() { }

  ngOnInit(): void 
  {
    const showData1=new myNameSpace.AddNewContact();
    this.showResult1=showData1.displayData1();
    

    const showData2=new myNameSpace.EditContact();
    this.showResult2=showData2.displayData2();

    const showData3=new myNameSpace.DeleteContact();
    this.showResult3=showData3.displayData3();

    const showData4=new myNameSpace.ListContact();
    this.showResult4=showData4.displayData4();
  }

}
