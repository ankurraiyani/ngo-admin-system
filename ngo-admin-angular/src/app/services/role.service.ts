import { Injectable } from "@angular/core";
import { RoleRepository } from "../repository/role.repository";

@Injectable()
export class RoleService {
    constructor(
        private roleRepo: RoleRepository) { }

    addRole(data: any) {
        return this.roleRepo.addrole(data);
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