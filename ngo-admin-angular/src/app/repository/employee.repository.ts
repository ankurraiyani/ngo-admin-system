import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL, EMPLOYEE_ADD, EMPLOYEE_DELETE, EMPLOYEE_GETALL, EMPLOYEE_ISACTIVE_DEACTIVE, GET_ALL_ACTIVE_EMPLOYEE} from "../common/url";

@Injectable()
export class EmployeeRepository {
    getEmployeeId(id: any) {
        return this.apiClient.doPublicGet(EMPLOYEE_GETALL+"/"+id);
    }
    
    constructor( 
        private apiClient:ApiClientRepository) { }
    
    addEmployee(data : any){
        //return this.apiClient.doPublicPost(EMPLOYEE_ADD, data);
        let formData = new FormData()
        console.log(data.imageInPut);
		if(data.imageInPut)
            formData.append('imageInPut', data.imageInPut);
        if(data.id)
            formData.append('id', data.id);
        
        formData.append('employeeName', data.employeeName);
        
        formData.append('joiningDate', data.joiningDate);
        formData.append('employeeTiming', data.employeeTiming);
        formData.append('aadharcardNo', data.aadharcardNo);
        formData.append('address', data.address);
        formData.append('contactNumber', data.contactNumber);
        formData.append('contactEmployyeEmail', data.contactEmployyeEmail);
        // formData.append('roleOfEmployee', data.roleOfEmployee);
        formData.append('age', data.age);
        formData.append('gender', data.gender);
        formData.append('salary', data.salary);
        formData.append('isActive', data.isActive);
        formData.append('isImageUpload',data.isImageUpload)


        return this.apiClient.doPublicPost(EMPLOYEE_ADD,formData);
    }
    searchEmployee(fetchEmployeeListParam:any) {
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
    getAllActiveEmployee() {
        return this.apiClient.doPublicGet(GET_ALL_ACTIVE_EMPLOYEE);
    }

}