import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data3Service 
{
  constructor() { }
  private privateHeader="This Is My Service Using Private Modifier";

  msgNotify():string
  {
    return this.privateHeader;
  }
  
}
