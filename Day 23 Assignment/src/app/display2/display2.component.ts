import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Service2Service } from '../service2.service';


@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  userdata:any=[];
  frmUser:any;
  login:String="";
  

  constructor(private user:Service2Service,private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.frmUser = this.formBuilder.group({
      id: '',
      password: '',
    })

    this.user.GetAllUser().subscribe(data=>{
      this.userdata=data;
    })
  }

  onSubmit(){

    const userValue = this.frmUser.value;
    console.log(userValue);
    
   const  serverUser =  this.userdata.filter((u :any) => {
          return u.username === this.frmUser.value.username;

    })

   // console.log("server "+JSON.stringify(serverUser));
  
    
    if(serverUser[0].password === this.frmUser.value.password) {
     this.login=" Login successful..!!";
    }else{
      this.login="Failed";
      
    }

  }

}
