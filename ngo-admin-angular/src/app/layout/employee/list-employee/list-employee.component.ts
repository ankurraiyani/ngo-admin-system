import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  // employeeList: any;

  constructor(private employeeService:EmployeeService,
              private commonService:CommonService) { }

              employeeList: any;
              pageLimitOptions: any = [10, 15, 20, 25, 30];
              totalCount: any = 0;
              fetchEmployeeListParam = {
                pageSize: this.pageLimitOptions[0],
                searchStr: "",
                pageNo: 0,
                currentPage: 0
              }
            

  // employee:any;

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Employee List';
    });

    this.getEmployeeData();
  }

  getEmployeeData() {
    this.employeeService.getAllEmployee(this.fetchEmployeeListParam).subscribe((results) => {
      this.employeeList = results.content;
      this.totalCount = results.totalElements;
    }, (error) => {
      this.commonService.showMessage("error", error.message)
    });
  }

  pageChanged(e: any) {
    this.fetchEmployeeListParam.currentPage = e;
    this.fetchEmployeeListParam.pageNo = e - 1;
    this.employeeList = [];
    this.getEmployeeData();
  }
  deleteIdEmployee(data:any)
  {
    this.employeeService.deleteIdEmployee(data);

  }

}
