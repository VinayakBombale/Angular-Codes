import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  productData:any=[];

  constructor() { }

  ngOnInit(): void {

  }
  onProductUpdate(prd:any)
  {
    this.productData.push(prd);
  }

}
