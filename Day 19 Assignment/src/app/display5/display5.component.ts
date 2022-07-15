import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-display5',
  templateUrl: './display5.component.html',
  styleUrls: ['./display5.component.css']
})
export class Display5Component implements OnInit {
  contactForm:any;

  constructor() { }

  ngOnInit(): void 
  {
    this.contactForm=new FormGroup(
      {
        id: new FormControl(""),
        name:new FormControl(""),
        address:new FormControl(""),
        pincode:new FormControl("")
      }
    )
  }
  onSubmit(cForms:any)
  {
    console.log(cForms);
  }
  

}
