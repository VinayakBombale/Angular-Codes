import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-displayform',
  templateUrl: './displayform.component.html',
  styleUrls: ['./displayform.component.css']
})
export class DisplayformComponent implements OnInit {
  showResult:string="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(frmConact:any)
  {
    if(frmConact.status==='VALID')
    {
      this.showResult="Valid: Contact form Submitted";
    console.log("Contact form Submitted");
    }
    else
    {
      this.showResult="Invalid: Contact form is Invaild"
      console.log("Contact form is Invalid");
    }
  }

}