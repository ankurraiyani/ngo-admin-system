import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,
              private commonService:CommonService) { }

  employee:any;

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Employee List';
    });

    this.getAllEmployee();
  }

  getAllEmployee(){
    this.employeeService.getAllEmployee().subscribe((results)=>{
      this.employee=results;
    },
    (error)=>{
      this.commonService.showMessage('error',error.message);
    }
    );
  }

}
