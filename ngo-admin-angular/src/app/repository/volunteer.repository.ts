import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL,EVENT_DELETE,GET_ALL_ACTIVE_VOLUNTEER,VOLUNTEER_ADD, VOLUNTEER_DELETE, VOLUNTEER_GETALL, VOLUNTEER_GETID, VOLUNTEER_ISACTIVE_DEACTIVE } from "../common/url";

@Injectable()
export class VolunteerRepository {
   
    
    constructor(    
        private apiClient:ApiClientRepository) { }

    addVolunteer(data : any)
    {
        let formData = new FormData()
        console.log(data.imageInPut);
		formData.append('imageInPut', data.imageInPut);
        if(data.id)
            formData.append('id', data.id);
        
        formData.append('name', data.name);
        
        formData.append('contactNumber', data.contactNumber);
        formData.append('address', data.address);
        formData.append('email', data.email);
        formData.append('gender', data.gender);
        formData.append('age', data.age);
        formData.append('dateOfJoining', data.dateOfJoining);
        formData.append('availableTime', data.availableTime);
        formData.append('areaOfInterest', data.areaOfInterest);
        formData.append('isActive', data.isActive);
        formData.append('isImageUpload', data.isImageUpload);


        return this.apiClient.doPublicPost(VOLUNTEER_ADD,formData);
    }

    getAllVolunteer(fetchVolunteerListParam:any)
    {
        return this.apiClient.doPublicPost(VOLUNTEER_GETALL,fetchVolunteerListParam);
    }

    getIdVolunteer(data: any) {
        return this.apiClient.doPublicGet(VOLUNTEER_GETID+"/"+data);
    }
    
    deleteIDVolunteer(data:any)
    {
        console.log("delete Repository");
        return this.apiClient.doPublicDelete(VOLUNTEER_DELETE+'/'+data);
        
    }
    isActiveDeactiveVolunteer(volunteerId: any, isActive: any) {
        let formData = new FormData();
        formData.append('volunteerId', volunteerId);
		formData.append('isActive', isActive);
        return this.apiClient.doPublicPostWithoutJson(VOLUNTEER_ISACTIVE_DEACTIVE,formData);
   
    }
    getAllActiveVolunteer() {
        return this.apiClient.doPublicGet(GET_ALL_ACTIVE_VOLUNTEER);
    }
}