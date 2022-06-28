import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
              private commonService: CommonService,
              private router: Router) { }

  employeeForm: FormGroup;

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Add Employee';
    });

    this.iniatilzeFrom();
  }

  iniatilzeFrom() {
    this.employeeForm = new FormGroup({
      employeeName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),

      // lastname: new FormControl('',  [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),

      // email: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      contactNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)\0)?[0-9]{10}$"), Validators.maxLength(10)]),

      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      aadharcardNo: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[0-9]*$")]),

      roleOfEmployee: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      gender: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      age: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      joiningDate: new FormControl('', [Validators.required]),

      // leavingDate:new FormControl('',  [Validators.required]),

      salary: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[0-9,]*$")]),

      employeeTiming: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      contactEmployyeEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    })
  }

  submit() {
    this.employeeForm.markAllAsTouched();

    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe((results) => {
        this.commonService.showMessage("success", "Employee Added Sucessfully");
        this.router.navigate(['/employee']);
      },
        (error) => { 
          this.commonService.showMessage('error',error.message);
        }
      );
    }

  }
}
