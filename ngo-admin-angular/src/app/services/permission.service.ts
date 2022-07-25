import { Injectable } from "@angular/core";
import { DonerRepository } from "../repository/doner.repository";
import { EvnetRepository } from "../repository/event.repository";
import { PermissionRepository } from "../repository/permission.repository";

@Injectable()
export class PermissionService {
    showMessage: any;
    constructor( 
        private permissionRepo:PermissionRepository) { }

   
    
    getAllPermission() {
        return this.permissionRepo.getAllPermission();
    }
   
}