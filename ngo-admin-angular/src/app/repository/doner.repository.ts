import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL, DONER_ADD, DONER_DELETE, DONER_GETALL, DONER_GETID, EVENT_ADD, EVENT_GETALL } from "../common/url";

@Injectable()
export class DonerRepository {
    getIdDoner(data: any) {
        return this.apiClient.doPublicGetAll(DONER_GETID+"/"+data);
    }
    
    constructor( 
        private apiClient:ApiClientRepository) { }
    
    addDoner(data:any)
    {
        return this.apiClient.doPublicPost(DONER_ADD,data);
    }
    getAllDoner(fetchEventListParam:any)
    {
        return this.apiClient.doPublicPost(DONER_GETALL,fetchEventListParam);
    }

    deleteDoner(data:any)
    {
        return this.apiClient.doPublicDelete(DONER_DELETE+"/"+data)
    }

    
}