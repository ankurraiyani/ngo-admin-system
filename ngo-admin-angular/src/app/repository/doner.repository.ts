import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL, DONER_ADD, DONER_GETALL, EVENT_ADD, EVENT_GETALL } from "../common/url";

@Injectable()
export class DonerRepository {
    
    constructor( 
        private apiClient:ApiClientRepository) { }
    
    addDoner(data:any)
    {
        return this.apiClient.doPublicPost(DONER_ADD,data);
    }
    getAllDoner()
    {
        return this.apiClient.doPublicGetAll(DONER_GETALL);
    }
}