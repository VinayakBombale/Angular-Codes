import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass1-tue',
  templateUrl: './ass1-tue.component.html',
  styleUrls: ['./ass1-tue.component.css']
})
export class Ass1TueComponent implements OnInit {
 Result:string="";

  constructor() { }

  ngOnInit(): void {
    
  }
    onSubmit()
    {
      this.Result=this.AddContact();
    }
    AddContact():string
    {
      return "123456789";
    }


}
