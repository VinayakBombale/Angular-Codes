import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  empId1:number=0;
  childShow:boolean=true;
    constructor() { 
      console.log("Display1 constructor");
    }
    ngOnInit(): void {
      console.log("Display1 ngOnInit");
    }
    onCounterHandler(){
      this.empId1 = this.empId1 + 1;
    }
    onDestroyHandler()
    {
      this.childShow =! this.childShow;
    }

}
