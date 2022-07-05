import { Injectable } from "@angular/core";
import { EmployeeRepository } from "../repository/employee.repository";
import { EvnetRepository } from "../repository/event.repository";

@Injectable()
export class EmployeeService {
    constructor(
        private employeeRepo: EmployeeRepository) { }

    addEmployee(data: any) {
        return this.employeeRepo.addEmployee(data);
    }
    searchEmployee(fetchEmployeeListParam: any) {
        return this.employeeRepo.searchEmployee(fetchEmployeeListParam);
    }
    deleteIdEmployee(data: any) {
        return this.employeeRepo.deleteIdEmployee(data);
    }
    getEmployeeId(id: any) {
        return this.employeeRepo.getEmployeeId(id);
    }
    isActiveDeactiveEmployee(employeeId: any, isActive: any) {
        return this.employeeRepo.isActiveDeactiveEmployee(employeeId, isActive);
    }
    getAllActiveEmployee() {
        return this.employeeRepo.getAllActiveEmployee();
    }

}