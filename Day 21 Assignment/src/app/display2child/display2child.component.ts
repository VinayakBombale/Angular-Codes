import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display2child',
  templateUrl: './display2child.component.html',
  styleUrls: ['./display2child.component.css']
})
export class Display2childComponent implements OnInit {
  @Output()productUpdate = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(product:any)
  {
    
    this.productUpdate.emit(product.value);
  }

}
