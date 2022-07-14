import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  arrayData:any=[
    {empid:1,  empname:'Vinayak', status:'A'},
    {empid:2,  empname:'Praful',  status:'D'},
    {empid:3,  empname:'Saurav',  status:'D'},
    {empid:4,  empname:'Mayur',   status:'A'},
    {empid:5,  empname:'Sunny',   status:'D'},
    {empid:6,  empname:'Amar',    status:'A'},
    {empid:7,  empname:'Amardeep',status:'V'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
