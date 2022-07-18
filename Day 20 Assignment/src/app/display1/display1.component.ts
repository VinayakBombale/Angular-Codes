import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  frmClient:any;

  constructor() { }

  ngOnInit(): void {
    this.frmClient = new FormGroup(
      {
        id: new FormControl("",[Validators.required,Validators.minLength(6)]),
        name: new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
        address: new FormControl("",Validators.required),
        contact: new FormControl("",[Validators.pattern('^[0-9]+$')])
      }
    )
   
  }
  onSubmit(cForms:any)
  {
    console.log(cForms);
  }
}