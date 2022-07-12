import { Injectable } from '@angular/core';
// import { Data1Service } from './data1.service';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {
 
  dataSer2()
  {
    return "This is Data Service 2";
  }

  constructor() { }
}
