import { Injectable } from "@angular/core";
import { EmployeeRepository } from "../repository/employee.repository";
import { EvnetRepository } from "../repository/event.repository";
import { ServicetypeRepository } from "../repository/servicetype.repository";

@Injectable()
export class ServicetypeService {
    constructor(
        private servicetypeRepo: ServicetypeRepository) { }

    addServicetype(data: any) {
        return this.servicetypeRepo.addservicetype(data);
    }
    // searchEmployee(fetchEmployeeListParam: any) {
    //     return this.employeeRepo.searchEmployee(fetchEmployeeListParam);
    // }
    // deleteIdEmployee(data: any) {
    //     return this.employeeRepo.deleteIdEmployee(data);
    // }
    // getEmployeeId(id: any) {
    //     return this.employeeRepo.getEmployeeId(id);
    // }
    // isActiveDeactiveEmployee(employeeId: any, isActive: any) {
    //     return this.employeeRepo.isActiveDeactiveEmployee(employeeId, isActive);
    // }
    // getAllActiveEmployee() {
    //     return this.employeeRepo.getAllActiveEmployee();
    // }

}