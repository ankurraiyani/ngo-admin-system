import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL, EMPLOYEE_ADD, EMPLOYEE_DELETE, EMPLOYEE_GETALL, EMPLOYEE_ISACTIVE_DEACTIVE} from "../common/url";

@Injectable()
export class EmployeeRepository {
    getEmployeeId(id: any) {
        return this.apiClient.doPublicGetAll(EMPLOYEE_GETALL+"/"+id);
    }
    
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
    isActiveDeactiveEmployee(employeeId:any, isActive:any) {
        let formData = new FormData();
        formData.append('employeeId', employeeId);
		formData.append('isActive', isActive);
        return this.apiClient.doPublicPostWithoutJson(EMPLOYEE_ISACTIVE_DEACTIVE,formData);
     }

}