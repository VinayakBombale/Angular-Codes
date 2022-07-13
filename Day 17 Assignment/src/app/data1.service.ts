import { Injectable } from '@angular/core';

export namespace myNameSpace
{
  @Injectable({
    providedIn: 'root'
  })
  export class AddNewContact
  {
   constructor() { }

   displayData1()
   {
    return "New Contact Added...";
   }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class EditContact
  {
   constructor() { }
    displayData2()
    {
      return "Contact Updated Successfully...";
    }
  
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteContact
  {
   constructor() { }

   displayData3()
   {
    return"Contact Deleted Succesfully...";
   }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class ListContact
  {
   constructor() { }

   displayData4()
   {
    return "New Contact Added in List...";
   }
  }

}

