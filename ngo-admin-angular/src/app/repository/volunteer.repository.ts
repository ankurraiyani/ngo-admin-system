import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL,VOLUNTEER_ADD, VOLUNTEER_GETALL } from "../common/url";

@Injectable()
export class VolunteerRepository {
    
    constructor(    
        private apiClient:ApiClientRepository) { }

    addVolunteer(data : any)
    {
        return this.apiClient.doPublicPost(VOLUNTEER_ADD,data);
    }

    getAllVolunteer()
    {
        return this.apiClient.doPublicGetAll(VOLUNTEER_GETALL);
    }
    

}