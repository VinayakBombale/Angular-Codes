import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-wed-ass4-det',
  templateUrl: './wed-ass4-det.component.html',
  styleUrls: ['./wed-ass4-det.component.css']
})
export class WedAss4DetComponent implements OnInit {
  @Input("propEname") displayFullName:any;
  @Input("propDesignation") displayDesignation:any;
  @Input("propEmployeeLeaves") displayEmployeeLeaves:any;
  constructor() { }

  ngOnInit(): void {
  }

}
