import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor() { }
  static staticHeaderText="This is My Services Using Static Modifier";
}
