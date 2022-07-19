import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
  userData:any=[];
  selecteduserId:number=0;
  constructor() { }

  ngOnInit(): void {
    this.userData=[
      {userId:1,userName:"Pranav",userStatus:"Active",roleAssign:"Developer"},
      {userId:2,userName:"Paresh",userStatus:"Disable",roleAssign:"Tester"},
      {userId:3,userName:"Karan",userStatus:"Active",roleAssign:"Engineer"},
      {userId:4,userName:"Samir",userStatus:"Disable",roleAssign:"Data Scientist"},
      {userId:5,userName:"Aditya",userStatus:"Active",roleAssign:"Intern"}
  ]
  }
  onDetails(selectedId:number)
  {
      this.selecteduserId = selectedId;
  }

}
