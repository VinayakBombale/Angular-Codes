import { Component, OnInit, } from '@angular/core';
import { FormGroup,FormArray,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  empData:any=[];
  empData2:any=[];
  

  selecteduser:any;
  constructor() { }

  ngOnInit(): void {
    this.empData=[
      {EmpId:1,Empname:"Pranav",Salary:25000},
      {EmpId:2,Empname:"Sagar",Salary:35000},
      {EmpId:3,Empname:"Ramesh",Salary:30000},
      {EmpId:4,Empname:"Sai",Salary:22000},
      {EmpId:5,Empname:"Akshay",Salary:40000},
  ]
  }
  onDetails(empRow:any)
  {
      this.empData2.push(empRow);
      
      
  }
}
