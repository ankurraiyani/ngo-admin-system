import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { GET_ALL_PERMISSION } from "../common/url";


@Injectable()
export class PermissionRepository {
   
   
    
    constructor( 
        private apiClient:ApiClientRepository) { }
    
   
    getAllPermission() {
        return this.apiClient.doPublicGet(GET_ALL_PERMISSION);
    }

    
   
    
}

