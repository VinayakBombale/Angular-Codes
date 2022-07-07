import { Component, OnInit } from '@angular/core';
interface IEmployee
{
  contactName:string,
  contactAddress:string,
  contactPhone:number,
  contactArea:string
}

@Component({
  selector: 'app-ass2-tue',
  templateUrl: './ass2-tue.component.html',
  styleUrls: ['./ass2-tue.component.css']
})
export class Ass2TueComponent implements OnInit {

  constructor() { }
  arrEmp:IEmployee={contactName:"",contactAddress:"",contactPhone:0,contactArea:""};
  ngOnInit(): void {
  }

  onSubmit()
  {
    
    this.arrEmp={contactName:"Raghav Joshi",contactAddress:"Pune",contactPhone:860579829,contactArea:"South Zone"};
    console.log(this.arrEmp);
  }

}
