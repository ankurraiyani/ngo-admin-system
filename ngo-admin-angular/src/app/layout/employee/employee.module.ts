import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DASHBOARD_ROUTE } from '../dashboard/dashboard-routing.module';
import { EMPLOYEE_ROUTE } from './emloyee-routing.module';
// import { LisEmployeeComponent } from './lis-employee/lis-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [AddEmployeeComponent,ListEmployeeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    EMPLOYEE_ROUTE
  ]
})
export class EmployeeModule { }
