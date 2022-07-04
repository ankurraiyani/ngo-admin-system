import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL,EVENT_DELETE,VOLUNTEER_ADD, VOLUNTEER_DELETE, VOLUNTEER_GETALL, VOLUNTEER_GETID, VOLUNTEER_ISACTIVE_DEACTIVE } from "../common/url";

@Injectable()
export class VolunteerRepository {
   
    
    constructor(    
        private apiClient:ApiClientRepository) { }

    addVolunteer(data : any)
    {
        return this.apiClient.doPublicPost(VOLUNTEER_ADD,data);
    }

    getAllVolunteer(fetchVolunteerListParam:any)
    {
        return this.apiClient.doPublicPost(VOLUNTEER_GETALL,fetchVolunteerListParam);
    }

    getIdVolunteer(data: any) {
        return this.apiClient.doPublicGetAll(VOLUNTEER_GETID+"/"+data);
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

}