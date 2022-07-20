import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  frmContact: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.frmContact = this.formBuilder.group(
      {
        username: '',
        rolls: this.formBuilder.array([])
      }
    )
  }
  get rolls(): FormArray {
    return this.frmContact.get("rolls") as FormArray
  }

  newSkill(): FormGroup {
    return this.formBuilder.group(
      {
        roll: '',
      }
    )
  }
  addSkills()
  {
    this.rolls.push(this.newSkill());
  }
  removeRoll(i:number)
  {
    this.rolls.removeAt(i);
  }
  onSubmit()
  {
    console.log(this.frmContact.value)
  }

}