import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-doner',
  templateUrl: './add-doner.component.html',
  styleUrls: ['./add-doner.component.css']
})
export class AddDonerComponent implements OnInit {

  constructor() { }
  donerForm :FormGroup;
  
  ngOnInit(): void {
    console.log("hello");
  
    this.iniatilzeFrom();

  }
  iniatilzeFrom() {
    this.donerForm=new FormGroup({
      
    name: new FormControl('',  [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),

    lastName: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

    email: new FormControl('',  [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

    contactNumber: new FormControl('',  [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]),
    
    date:new FormControl('',  [Validators.required,Validators.minLength(3), Validators.maxLength(50)]),

    description: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

    typeofDonation:new FormControl('',  [Validators.required]),

    
    
    
  });
  }

  submit() {
    this.donerForm.markAllAsTouched();
    if(this.donerForm.valid) {
      console.log("success");
      console.log("First Name : "+this.donerForm.controls.name.value);
      console.log("Last Name : "+this.donerForm.controls.lastName.value);
      console.log("Email : "+this.donerForm.controls.email.value);
      console.log("Contact Number : "+this.donerForm.controls.contactNumber.value);
      console.log("Type of Donation: "+this.donerForm.controls.typeofDonation.value);
      console.log("Date of Donation: "+this.donerForm.controls.date.value);
      console.log("Description : "+this.donerForm.controls.description.value);
      
    }
  }

}
