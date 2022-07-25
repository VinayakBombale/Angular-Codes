import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  empData: any = [];
  frmEmp: any;
  constructor(private Euser:UsersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.LoadEmp();
    this.frmEmp = this.formBuilder.group({
      id: '',
      employeename: '',
      designation: '',
      status: ''
    })
  }
  LoadEmp() {
    this.Euser.GetAllClient().subscribe(data => {
      this.empData = data;
    })   
  }
  onSubmit() {
    console.log("form ", this.frmEmp.value);
    const clientValue = this.frmEmp.value;
    this.Euser.AddNewClient(clientValue).subscribe((res: any) => {
      this.LoadEmp();
    })
  }

}