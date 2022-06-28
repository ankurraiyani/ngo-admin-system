import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL, EMPLOYEE_ADD, EMPLOYEE_GETALL, EVENT_ADD } from "../common/url";

@Injectable()
export class EmployeeRepository {
    
    constructor( 
        private apiClient:ApiClientRepository) { }
    
    addEmployee(data : any){
        return this.apiClient.doPublicPost(EMPLOYEE_ADD, data);
    }
    getAllEmployee(){
        return this.apiClient.doPublicGetAll(EMPLOYEE_GETALL);
    }

}