import { Injectable } from "@angular/core";
import { EmployeeRepository } from "../repository/employee.repository";
import { EvnetRepository } from "../repository/event.repository";

@Injectable()
export class EmployeeService {
    constructor( 
        private employeeRepo:EmployeeRepository) { }

    addEmployee(data : any){
        return this.employeeRepo.addEmployee(data);
    }
    getAllEmployee(){
        return this.employeeRepo.getAllEmployee();
    }
}