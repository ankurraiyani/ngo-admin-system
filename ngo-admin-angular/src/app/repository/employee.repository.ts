import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL, EMPLOYEE_ADD, EMPLOYEE_DELETE, EMPLOYEE_GETALL, EVENT_ADD } from "../common/url";

@Injectable()
export class EmployeeRepository {
    
    constructor( 
        private apiClient:ApiClientRepository) { }
    
    addEmployee(data : any){
        return this.apiClient.doPublicPost(EMPLOYEE_ADD, data);
    }
    getAllEmployee(fetchEmployeeListParam:any) {
        return this.apiClient.doPublicPost(EMPLOYEE_GETALL,fetchEmployeeListParam);
     }
    
     deleteIdEmployee(data : any){
        console.log(data)
        return this.apiClient.doPublicDelete(EMPLOYEE_DELETE+"/"+data);
    }

}