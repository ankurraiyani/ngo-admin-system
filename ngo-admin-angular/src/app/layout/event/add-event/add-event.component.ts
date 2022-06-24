import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor() { }

  eventFrom : FormGroup;

  ngOnInit(): void {
    this.iniatilzeFrom();
  }
  iniatilzeFrom() {
    this.eventFrom = new FormGroup({
      name: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
    });
  }

  submit() {
    this.eventFrom.markAllAsTouched();
    if(this.eventFrom.valid) {
      console.log("success");
    }
  }
}
