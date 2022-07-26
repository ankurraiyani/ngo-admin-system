import { Injectable } from "@angular/core";
import { RoleRepository } from "../repository/role.repository";

@Injectable()
export class RoleService {
    constructor(
        private roleRepo: RoleRepository) { }

    addRole(data: any) {
        return this.roleRepo.addrole(data);
    }
    
    deleteRole(data: any) {
        return this.roleRepo.deleteRole(data);
    }
    
    getAllRole() {
        return this.roleRepo.getAllRole();
    }

}