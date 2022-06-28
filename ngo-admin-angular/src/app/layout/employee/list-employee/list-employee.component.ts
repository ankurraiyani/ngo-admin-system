import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employee:any[];
  ngOnInit(): void {
    console.log("List Event");
    this.employeeService.getAllEmployee().subscribe((results)=>{
      console.log("done");
      this.employee=results as any[];
    },
    (error)=>{}
    );
  }

}
