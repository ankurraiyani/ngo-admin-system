import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }
  employeeForm : FormGroup;
  ngOnInit(): void {
    this.iniatilzeFrom();
  }
  iniatilzeFrom() {
    this.employeeForm = new FormGroup({
      name: new FormControl('',  [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),

      lastname: new FormControl('',  [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),

      // email: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      contactNumber: new FormControl('',  [Validators.required,Validators.pattern("^((\\+91-?)\0)?[0-9]{10}$"),Validators.maxLength(10)]),

      address: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      aadharNumber:new FormControl('',  [Validators.required, Validators.maxLength(50),Validators.pattern("^[0-9]*$")]),
      
      roleemployee:new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      gender:new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      age:new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      date:new FormControl('',  [Validators.required]),

      // leavingDate:new FormControl('',  [Validators.required]),

      salary:new FormControl('',  [Validators.required,  Validators.maxLength(50),Validators.pattern("^[0-9,]*$")]),

      time:new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      email:new FormControl('',  [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    })
  }

  submit() {
    this.employeeForm.markAllAsTouched();
    if(this.employeeForm.valid) {
      console.log("success");
      console.log("First name :"+this.employeeForm.controls.name.value);
      console.log("Last name :"+this.employeeForm.controls.lastname.value);
      console.log("Contact Number :"+this.employeeForm.controls.contactNumber.value);
      console.log("Address :"+this.employeeForm.controls.address.value);
      console.log("aadhar Number :"+this.employeeForm.controls.aadharNumber.value);
      console.log("Role Of Employee:"+this.employeeForm.controls.roleemployee.value);
      console.log("Gender :"+this.employeeForm.controls.gender.value);
      console.log("Age :"+this.employeeForm.controls.age.value);
      console.log("date :"+this.employeeForm.controls.date.value);
      console.log("Salary :"+this.employeeForm.controls.salary.value);
      console.log("Time :"+this.employeeForm.controls.time.value);
      console.log("Email :"+this.employeeForm.controls.email.value);

    }

}
}
