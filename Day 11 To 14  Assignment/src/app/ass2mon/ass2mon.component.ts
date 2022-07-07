import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass2mon',
  templateUrl: './ass2mon.component.html',
  styleUrls: ['./ass2mon.component.css']
})
export class Ass2monComponent implements OnInit {
  showBox:boolean=false;

  

  constructor() { }

  ngOnInit(): void {
  }
  onToggle()
  {
    if(this.showBox===false)
    {
      this.showBox=true;
    }
    else
    {
      this.showBox=false;
    }
  }

}
