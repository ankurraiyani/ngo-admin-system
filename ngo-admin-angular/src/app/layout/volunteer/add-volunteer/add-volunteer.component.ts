import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-volunteer',
  templateUrl: './add-volunteer.component.html',
  styleUrls: ['./add-volunteer.component.css']
})
export class AddVolunteerComponent implements OnInit {

  constructor() { }

  volunteerForm : FormGroup;


  ngOnInit(): void {

    this.iniatilzeForm();

  }
  iniatilzeForm() {
    this.volunteerForm = new FormGroup({
      name: new FormControl('',  [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),

      lastName: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),

      email: new FormControl('',  [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      // Validators.email(^[a-z0-9._]@[a-z0-9.-]+\.[a-z]{2,4}$)

      contactNumber: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9]*$")]),

      address: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(150)]),

      age: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),

      gender: new FormControl('',[Validators.required]),

      date: new FormControl('',[Validators.required]),

      time: new FormControl('',[Validators.required]),

      interest: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(80)]),

    });
  }

  submit() {
    this.volunteerForm.markAllAsTouched();
    if(this.volunteerForm.valid) {
      console.log("success");
      console.log("First Name : "+this.volunteerForm.controls.name.value);
      console.log("Last Name : "+this.volunteerForm.controls.lastName.value);
      console.log("Email : "+this.volunteerForm.controls.email.value);
      console.log("Contact Number : "+this.volunteerForm.controls.contactNumber.value);
      console.log("Address : "+this.volunteerForm.controls.address.value);
      console.log("Age : "+this.volunteerForm.controls.age.value);
      console.log("Gender : "+this.volunteerForm.controls.gender.value);
      console.log("Joining Date : "+this.volunteerForm.controls.date.value);
      console.log("Availability Of Time : "+this.volunteerForm.controls.time.value);
      console.log("Area Of Interest : "+this.volunteerForm.controls.interest.value);

    }
  }

}