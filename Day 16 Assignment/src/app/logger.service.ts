import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  

  constructor() { }

  LoggerData():string
  {
    return "Name:Admin Log in at: 12:00 am";
     
  }
}
