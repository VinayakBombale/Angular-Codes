import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MsgDisplayService {
  

  constructor( private data2:LoggerService) { }

  msgDisplay1():string
  {
    // const showResult3=this.data2.LoggerData();
   return this.data2.LoggerData();    
  }
}
