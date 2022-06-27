import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DASHBOARD_ROUTE } from '../dashboard/dashboard-routing.module';
import { EMPLOYEE_ROUTE } from './emloyee-routing.module';
// import { LisEmployeeComponent } from './lis-employee/lis-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddEmployeeComponent, ListEmployeeComponent, ListEmployeeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EMPLOYEE_ROUTE
  ]
})
export class EmployeeModule { }
