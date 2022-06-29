import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL,EVENT_DELETE,VOLUNTEER_ADD, VOLUNTEER_DELETE, VOLUNTEER_GETALL } from "../common/url";

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
    
    deleteIDVolunteer(data:any)
    {
        console.log("delete Repository");
        return this.apiClient.doPublicDelete(VOLUNTEER_DELETE+'/'+data);
        
    }

}