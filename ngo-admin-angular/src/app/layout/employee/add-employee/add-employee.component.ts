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
  isAddForm = true;
 

  constructor(private employeeService: EmployeeService,
              private commonService: CommonService,
              private router: Router,
              private activatedRoute:ActivatedRoute) { }

  employeeForm: FormGroup;
  profileImage:any;


  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Add Employee';
    });

    


    this.iniatilzeFrom();
    this.employeeId=this.activatedRoute.queryParams['value'].id;
    if(this.employeeId==undefined || this.employeeId==null)
    {
      this.profileImage = "/assets/images/user2-160x160.jpg";
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Add Employee';
      });
  

    }
    else
    {
      this.isAddForm=false;
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Edit Employee';
      });
      this.employeeForm.controls['imageInPut'].setErrors(null);
        this.employeeForm.controls['imageInPut'].clearValidators();
        this.employeeForm.controls['imageInPut'].updateValueAndValidity();
      this.employeeService.getEmployeeId(this.employeeId).subscribe((result)=>{

        
  
        this.employeeForm.controls.employeeName.setValue(result.employeeName);
        this.employeeForm.controls.id.setValue(result.id);
        this.employeeForm.controls.contactEmployyeEmail.setValue(result.contactEmployyeEmail)
        this.employeeForm.controls.contactNumber.setValue(result.contactNumber)
        this.employeeForm.controls.aadharcardNo.setValue(result.aadharcardNo)
        this.employeeForm.controls.address.setValue(result.address)
        // this.employeeForm.controls.roleOfEmployee.setValue(result.roleOfEmployee)
        this.employeeForm.controls.gender.setValue(result.gender)
        this.employeeForm.controls.age.setValue(result.age)
        this.employeeForm.controls.joiningDate.setValue(result.joiningDate)
        this.employeeForm.controls.salary.setValue(result.salary)
        this.employeeForm.controls.employeeTiming.setValue(result.employeeTiming)
        this.employeeForm.controls.isActive.setValue(result.isActive)
        this.employeeForm.controls.isImageUpload.setValue(false);
        this.profileImage = result.imageOutPut;
       // console.log(this.employeeForm.controls.profileImage.value);
      });

    }
  }

  iniatilzeFrom() {
    this.employeeForm = new FormGroup({
      id:new FormControl(''),
      employeeName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),

      contactNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)\0)?[0-9]{10}$"), Validators.maxLength(10)]),

      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      aadharcardNo: new FormControl('', [Validators.required,
        Validators.minLength(12), Validators.maxLength(50), Validators.pattern("^[0-9]*$")]),

      // roleOfEmployee: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      gender: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      age: new FormControl('', [Validators.required, Validators.maxLength(50)]),

      joiningDate: new FormControl('', [Validators.required]),

      salary: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[0-9,]*$")]),

      employeeTiming: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      contactEmployyeEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      isActive: new FormControl(true),
      imageInPut:new FormControl('',[Validators.required]),
      isImageUpload:new FormControl(true)
    })
  }

  toggleClick(employeeId:any , isActive:any) {
   //console.log("asjcdfs"+employeeId)

      console.log(isActive)
      this.employeeService.isActiveDeactiveEmployee(this.employeeForm.controls.id,!isActive).subscribe((results) => {
        console.log("olfdl");
        console.log(results);
        let msg ;
        if(!isActive) {
           msg = 'Employee Activated Sucessfully';
        } else {
          msg = 'Employee Deactivated Sucessfully';
        }
        this.commonService.showMessage('success', msg);
        
      }, (error) => {
        this.commonService.showMessage("error", error.message)
      });
    }


  submit() {
    this.employeeForm.markAllAsTouched();

    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe((results) => {
        console.log(results);
        this.commonService.showMessage("success", "Employee Added Sucessfully");
        this.router.navigate(['/employee']);
      },
        (error) => { 
          this.commonService.showMessage('error',error.message);
        }
      );
    }

  }
  imageUpload(e)
  {
    this.employeeForm.controls.imageInPut.setValue(e.target.files[0]);
    this.employeeForm.controls.isImageUpload.setValue(true);
    
  }
}
