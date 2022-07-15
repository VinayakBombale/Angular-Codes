import { Component, OnInit,SimpleChanges,Input } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  @Input('propCounter') EmpId:any;
  constructor() {
   }

   ngOnChanges(changes: SimpleChanges) {
    const { EmpId } = changes;
    console.log(EmpId.currentValue, EmpId.previousValue);
  }

  ngOnInit(): void {
    console.log("Display 2 ngOnInit");
  }
   ngOnDestroy()
   {
    console.log("Display 2 ngOnDestroy");
   }
  

}