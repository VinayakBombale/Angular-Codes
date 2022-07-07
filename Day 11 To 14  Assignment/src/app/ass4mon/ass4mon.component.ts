import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass4mon',
  templateUrl: './ass4mon.component.html',
  styleUrls: ['./ass4mon.component.css']
})
export class Ass4monComponent implements OnInit {
  colType:Color=Color.none;

  constructor() { }

  ngOnInit(): void {
  }
  onColor(ColName:any)
  {
    if(ColName==='c1')
    {
      this.colType=Color.Blue;
    }
    else if(ColName==='c2')
    {
      this.colType=Color.Grey;
    }
    else if(ColName==='c3')
    {
      this.colType=Color.Yellow;
    }
    else if(ColName==='c4')
    {
      this.colType=Color.Green;
    }
    else if(ColName==='c5')
    {
      this.colType=Color.Red;
    }
    else
    {
      this.colType=Color.none;
    }
  }

}
enum Color
{
  none="None",
  Blue="Blue Color",
  Grey="Grey Color",
  Yellow="Yellow Color",
  Green="Green Color",
  Red="Red Color",

}