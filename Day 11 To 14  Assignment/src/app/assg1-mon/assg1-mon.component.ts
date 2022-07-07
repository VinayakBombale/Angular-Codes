import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assg1-mon',
  templateUrl: './assg1-mon.component.html',
  styleUrls: ['./assg1-mon.component.css']
})
export class Assg1MonComponent implements OnInit {
  ContactId:number=999;
  ContactName:String="Raghav Shastri";
  CompanyName:String="Alpha 87 @ pvt Ltd";
  DueAmount:String="4500.Rs";
  PhoneNo:number=8605794829;
  Area:any="South Zone";

  constructor() { }

  ngOnInit(): void {
  }

}
