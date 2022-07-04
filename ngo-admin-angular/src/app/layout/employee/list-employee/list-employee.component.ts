import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  
  
  
  constructor(private employeeService:EmployeeService,
                 private commonService:CommonService,
                 private router:Router) { }
  

              employeeList: any;
              pageLimitOptions: any = [10, 15, 20, 25, 30];
              totalCount: any = 0;
              fetchEmployeeListParam = {
                pageSize: this.pageLimitOptions[0],
                searchStr: "",
                pageNo: 0,
                currentPage: 0
              }
              searchSubscriber:Subscription

 

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Employee List';
    
     
    });

    this.getEmployeeData();
  }

  getEmployeeData() {
    if (this.searchSubscriber) {
      this.searchSubscriber.unsubscribe();
    }
    this.searchSubscriber = this.employeeService.getAllEmployee(this.fetchEmployeeListParam).subscribe((results) => {
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
  

  deleteIdEmployee(data : any){
      const swalWithBootstrapButtons = Swal.mixin({
         customClass: {
        confirmButton: 'btn btn-primary ml-2 ',
          cancelButton: 'btn btn-danger'
         },
        buttonsStyling: false,
      })
      swalWithBootstrapButtons.fire({
       title: 'Are you sure you want to delete eployee?',
       icon: 'warning',
       showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        allowOutsideClick: false
      }).then((result) => {
        if (result.value) {
          this.employeeService.deleteIdEmployee(data).subscribe((results) => {
          this.commonService.showMessage('success', 'Empployee Delete Sucessfully');
           this.getEmployeeData();
           this.commonService.fetchSearch();
          this.getEmployeeData();
         }, (error) => {
            this.commonService.showMessage('error',error.message);
      });
       }
      });
    }
    editEmployee(id)
    {
      //console.log(id)
       this.router.navigate(['/employee/add'],{queryParams:{id:id}});
    }
    
    toggleClick(employeeId:any , isActive:any) {
      console.log(isActive)
      this.employeeService.isActiveDeactiveEmployee(employeeId,!isActive).subscribe((results) => {
        let msg ;
        if(!isActive) {
           msg = 'Employee Activated Sucessfully';
        } else {
          msg = 'Employee Deactivated Sucessfully';
        }
        this.commonService.showMessage('success', msg);
        this.getEmployeeData();
      }, (error) => {
        this.commonService.showMessage("error", error.message)
      });
    }
  

}

