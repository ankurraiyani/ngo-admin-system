import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employeeForm : FormGroup;
  ngOnInit(): void {
    this.iniatilzeFrom();
  }
  iniatilzeFrom() {
    this.employeeForm = new FormGroup({
      employeeName: new FormControl('',  [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),

      // lastname: new FormControl('',  [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),

      // email: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      contactNumber: new FormControl('',  [Validators.required,Validators.pattern("^((\\+91-?)\0)?[0-9]{10}$"),Validators.maxLength(10)]),

      address: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      aadharcardNo:new FormControl('',  [Validators.required, Validators.maxLength(50),Validators.pattern("^[0-9]*$")]),
      
      roleOfEmployee:new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      gender:new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      age:new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      joiningDate:new FormControl('',  [Validators.required]),

      // leavingDate:new FormControl('',  [Validators.required]),

      salary:new FormControl('',  [Validators.required,  Validators.maxLength(50),Validators.pattern("^[0-9,]*$")]),

      employeeTiming:new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      contactEmployyeEmail:new FormControl('',  [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    })
  }

  submit() {
    this.employeeForm.markAllAsTouched();
    if(this.employeeForm.valid) {
      console.log("success");
      console.log("First name :"+this.employeeForm.controls.employeeName.value);
      // console.log("Last name :"+this.employeeForm.controls.lastname.value);
      console.log("Contact Number :"+this.employeeForm.controls.contactNumber.value);
      console.log("Address :"+this.employeeForm.controls.address.value);
      console.log("aadhar Number :"+this.employeeForm.controls.aadharcardNo.value);
      console.log("Role Of Employee:"+this.employeeForm.controls.roleOfEmployee.value);
      console.log("Gender :"+this.employeeForm.controls.gender.value);
      console.log("Age :"+this.employeeForm.controls.age.value);
      console.log("date :"+this.employeeForm.controls.joiningDate.value);
      console.log("Salary :"+this.employeeForm.controls.salary.value);
      console.log("Time :"+this.employeeForm.controls.employeeTiming.value);
      console.log("Email :"+this.employeeForm.controls.contactEmployyeEmail.value);


      this.employeeService.addEmployee(this.employeeForm.value).subscribe((results) => {
        console.log("api success");
      },
      (error)=>{}
      );
      



    }

}
}
