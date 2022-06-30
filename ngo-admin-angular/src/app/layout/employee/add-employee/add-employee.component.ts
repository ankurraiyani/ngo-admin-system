import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-Employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeId: any;

  constructor(private employeeService: EmployeeService,
              private commonService: CommonService,
              private router: Router,
              private activatedRoute:ActivatedRoute) { }

  employeeForm: FormGroup;

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Add Employee';
    });

    


    this.iniatilzeFrom();
    this.employeeId=this.activatedRoute.queryParams['value'].id;
    if(this.employeeId==undefined || this.employeeId==null)
    {
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Add Employee';
      });
  

    }
    else
    {
      setTimeout(() => {
        this.commonService.currentPageTitle = 'edit Employee';
      });
      this.employeeService.getEmployeeId(this.employeeId).subscribe((result)=>{
        this.employeeForm.controls.employeeName.setValue(result.employeeName);
        this.employeeForm.controls.id.setValue(result.id);
        this.employeeForm.controls.contactEmployyeEmail.setValue(result.contactEmployyeEmail)
        this.employeeForm.controls.contactNumber.setValue(result.contactNumber)
        this.employeeForm.controls.aadharcardNo.setValue(result.aadharcardNo)
        this.employeeForm.controls.address.setValue(result.address)
        this.employeeForm.controls.roleOfEmployee.setValue(result.roleOfEmployee)
        this.employeeForm.controls.gender.setValue(result.gender)
        this.employeeForm.controls.age.setValue(result.age)
        this.employeeForm.controls.joiningDate.setValue(result.joiningDate)
        this.employeeForm.controls.salary.setValue(result.salary)
        this.employeeForm.controls.employeeTiming.setValue(result.employeeTiming)
      });
  

    }
  }

  iniatilzeFrom() {
    this.employeeForm = new FormGroup({
      id:new FormControl(''),
      employeeName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),

      // lastname: new FormControl('',  [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),

      // email: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      contactNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)\0)?[0-9]{10}$"), Validators.maxLength(10)]),

      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      aadharcardNo: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[0-9]*$")]),

      roleOfEmployee: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      gender: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      age: new FormControl('', [Validators.required, Validators.maxLength(50)]),

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
